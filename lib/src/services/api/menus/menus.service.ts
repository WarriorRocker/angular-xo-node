import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { XoApiService } from '../api.service';
import { XoMenus } from './menus';

@Injectable()
export class XoApiMenusService extends XoApiService {
	get(name: string): Observable<XoMenus.MenusGetResponse> {
		return this._request.get(this.apiUrl + 'menus/get', {
			menu: name
		});
	}
}