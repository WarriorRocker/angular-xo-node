import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { XoApiService } from '../api.service';
import { XoTerms } from './terms';

@Injectable()
export class XoApiTermsService extends XoApiService {
	filter(params: XoTerms.TermsFilterFilters): Observable<XoTerms.TermsFilterResponse> {
		return this._request.post(this.apiUrl + 'terms/filter', params);
	}
}