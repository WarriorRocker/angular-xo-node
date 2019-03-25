import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { XoApiService } from '../api.service';
import { XoOptions } from './options';

/**
 * Provide endpoints for retrieving option groups.
 */
@Injectable()
export class XoApiOptionsService extends XoApiService {
	/**
	 * Get an option group by name.
	 */
	get(name: string): Observable<XoOptions.OptionsGetResponse> {
		return this._request.get('/options/get', {
			name: name
		});
	}
}