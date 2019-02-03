import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ApiService } from '../api.service';
import { Menus } from './menus';

@Injectable()
export class ApiMenusService extends ApiService {
	get(name: string): Observable<Menus.MenusGetResponse> {
		return this._request.get(this.apiUrl + 'menus/get', {
			menu: name
		});
	}
}