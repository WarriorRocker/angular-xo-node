import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { XoApiService } from '../api.service';
import { XoConfig } from './config';

/**
 * Provide endpoints for retrieving the main site configuration.
 */
@Injectable()
export class XoApiConfigService extends XoApiService {
	/**
	 * Get the main site configuration.
	 */
	get(name: string): Observable<XoConfig.ConfigGetResponse> {
		return this._request.get(this.apiUrl + 'config/get');
	}
}