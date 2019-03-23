import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { XoApiService } from '../api.service';
import { XoRoutes } from './routes';

@Injectable()
export class XoApiRoutesService extends XoApiService {
	get(): Observable<XoRoutes.RoutesGetResponse> {
		return this._request.get(this.apiUrl + 'routes/get');
	}
}