import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ApiService } from '../api.service';
import { Terms } from './terms';

@Injectable()
export class ApiTermsService extends ApiService {
	filter(params: Terms.TermsFilterFilters): Observable<Terms.TermsFilterResponse> {
		return this._request.post(this.apiUrl + 'terms/filter', params);
	}
}