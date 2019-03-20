import { Injectable } from '@angular/core';

import { XoGlobals } from '../globals/globals.service';
import { XoApiRequestService } from './apiRequest.service';

@Injectable()
export class XoApiService {
	apiUrl: string;

	constructor(public _globals: XoGlobals, public _request: XoApiRequestService) {
		this.apiUrl = this._globals.appConfig.paths.apiUrl;
	}
}