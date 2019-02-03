import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ApiService } from '../api.service';
import { Options } from './options';

@Injectable()
export class ApiOptionsService extends ApiService {
	get(name: string): Observable<Options.OptionsGetResponse> {
		return this._request.get(this.apiUrl + 'options/get', {
			name: name
		});
	}
}