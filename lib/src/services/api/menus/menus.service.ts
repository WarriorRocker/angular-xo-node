import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { XoApiService } from '../api.service';
import { XoMenus } from './menus';

/**
 * Provide endpoints for retrieving navigation menus.
 */
@Injectable()
export class XoApiMenusService extends XoApiService {
	/**
	 * Get a navigation menu by location name.
	 */
	get(name: string): Observable<XoMenus.MenusGetResponse> {
		return this._request.get(this.apiUrl + 'menus/get', {
			menu: name
		});
	}
}