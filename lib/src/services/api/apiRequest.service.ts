import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { XoGlobals } from '../globals.service';

@Injectable()
export class XoApiRequestService {
	constructor(public _globals: XoGlobals, public _http: HttpClient) { }

	get<T>(url: string, params?: any, useCache?: boolean): Observable<T> {
		return this.cacheCheck<T>(url, params, useCache, () =>
			this._http.get<T>(url, { params: params }));
	}

	post<T>(url: string, params: any, useCache?: boolean): Observable<T> {
		return this.cacheCheck(url, params, useCache, () =>
			this._http.post<T>(url, params));
	}

	private cacheCheck<T>(url: string, params: any, useCache: boolean, callback): Observable<T> {
		return new Observable<T>((observer) => {
			const { next, error } = observer;
			const key = url + ((params) ? ':' + JSON.stringify(params) : '');

			if (((useCache) || (typeof useCache === 'undefined'))
				&& (this._globals.apiCache[key])) {
				observer.next(this._globals.apiCache[key]);
			} else {
				if (callback) {
					callback().subscribe((response) => {
						observer.next(response);
					});
				} else {
					observer.error();
				}
			}
		});
	}
}