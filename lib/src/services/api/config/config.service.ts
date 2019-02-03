import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ApiService } from '../api.service';
import { Config } from './config';

@Injectable()
export class ApiConfigService extends ApiService {
	get(name: string): Observable<Config.ConfigGetResponse> {
		return this._request.get(this.apiUrl + 'config/get');
	}
}