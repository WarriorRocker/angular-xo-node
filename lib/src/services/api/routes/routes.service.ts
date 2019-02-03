import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ApiService } from '../api.service';
import { Routes } from './routes';

@Injectable()
export class ApiRoutesService extends ApiService {
	get(): Observable<Routes.RoutingGetResponse> {
		return this._request.get(this.apiUrl + 'routes/get');
	}
}