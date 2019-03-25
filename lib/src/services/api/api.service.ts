import { Injectable } from '@angular/core';

import { XoApiRequestService } from './apiRequest.service';

@Injectable()
export class XoApiService {
	constructor(public _request: XoApiRequestService) { }
}