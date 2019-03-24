import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { XoApiService } from '../api.service';
import { XoTerms } from './terms';

/**
 * Provide endpoints for filtering terms.
 */
@Injectable()
export class XoApiTermsService extends XoApiService {
	/**
	 * Get a taxonomy and term by url.
	 */
	get(url: string): Observable<XoTerms.TermsGetResponse> {
		return this._request.get(this.apiUrl + 'terms/get', {
			url: url
		});
	}

	/**
	 * Filter, search, or list terms by various properties similar to get_terms().
	 */
	filter(params: XoTerms.TermsFilterRequest): Observable<XoTerms.TermsFilterResponse> {
		return this._request.post(this.apiUrl + 'terms/filter', params);
	}
}