import { Injectable } from '@angular/core';

import { Globals } from '../globals.service';
import { ApiRequestService } from './apiRequest.service';

@Injectable()
export class ApiService {
	apiUrl: string;

	constructor(public _globals: Globals, public _request: ApiRequestService) {
		this.apiUrl = this._globals.appConfig.paths.apiUrl;
	}
}