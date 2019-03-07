import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { XoApiService } from '../api.service';
import { XoPosts } from './posts';

@Injectable()
export class XoApiPostsService extends XoApiService {
	getPage(url: string): Observable<XoPosts.PostsGetResponse> {
		return this._request.get(this.apiUrl + 'posts/get', {
			url: url
		});
	}

	getDraftOrPreview(postId: number): Observable<XoPosts.PostsGetResponse> {
		return this._request.get(this.apiUrl + 'posts/getDraftOrPreview', {
			postId: postId
		});
	}

	filter(params: XoPosts.PostFilterFilters): Observable<XoPosts.PostsFilterResponse> {
		return this._request.post(this.apiUrl + 'posts/filter', params);
	}
}