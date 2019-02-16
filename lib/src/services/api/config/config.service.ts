import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { XoApiService } from '../api.service';
import { XoConfig } from './config';

@Injectable()
export class XoApiConfigService extends XoApiService {
	get(name: string): Observable<XoConfig.ConfigGetResponse> {
		return this._request.get(this.apiUrl + 'config/get');
	}
}