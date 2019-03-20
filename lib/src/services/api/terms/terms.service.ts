import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { XoApiService } from '../api.service';
import { XoTerms } from './terms';

@Injectable()
export class XoApiTermsService extends XoApiService {
	get(url: string): Observable<XoTerms.TermsGetResponse> {
		return this._request.get(this.apiUrl + 'terms/get', {
			url: url
		});
	}

	filter(params: XoTerms.TermsFilterFilters): Observable<XoTerms.TermsFilterResponse> {
		return this._request.post(this.apiUrl + 'terms/filter', params);
	}
}