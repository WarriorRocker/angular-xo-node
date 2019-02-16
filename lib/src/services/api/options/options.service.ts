import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { XoApiService } from '../api.service';
import { XoOptions } from './options';

@Injectable()
export class XoApiOptionsService extends XoApiService {
	get(name: string): Observable<XoOptions.OptionsGetResponse> {
		return this._request.get(this.apiUrl + 'options/get', {
			name: name
		});
	}
}