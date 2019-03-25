import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { XoGlobals } from '../globals/globals.service';

@Injectable()
export class XoApiRequestService {
	/**
	 * Base path or URL of the Xo API.
	 */
	apiUrl: string = '';

	constructor(public _globals: XoGlobals, public _http: HttpClient) {
		if (('paths' in this._globals.appConfig)
			&& ('apiUrl' in this._globals.appConfig.paths)) {
			this.apiUrl = this._globals.appConfig.paths.apiUrl;
		}
	}

	/**
	 * Perform a GET request to the Xo API.
	 * 
	 * @param path Relative path of the API endpoint.
	 * @param params Input parameters added to the GET request.
	 * @param useCache Pro feature, optionally retrieve the item from apiCache.
	 */
	get<T>(path: string, params?: any, useCache?: boolean): Observable<T> {
		return this.cacheCheck<T>(path, params, useCache, () =>
			this._http.get<T>(this.apiUrl + path, { params: params }));
	}

	/**
	 * Perform a POST request to the Xo API.
	 * 
	 * @param path Relative path of the API endpoint.
	 * @param params Input parameters added to the POST request.
	 * @param useCache Pro feature, optionally retrieve the item from apiCache.
	 */
	post<T>(path: string, params: any, useCache?: boolean): Observable<T> {
		return this.cacheCheck(path, params, useCache, () =>
			this._http.post<T>(this.apiUrl + path, params));
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