import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ApiService } from '../api.service';
import { Posts } from './posts';

@Injectable()
export class ApiPostsService extends ApiService {
	getPage(url: string): Observable<Posts.PostsGetResponse> {
		return this._request.get(this.apiUrl + 'posts/get', {
			url: url
		});
	}

	getDraftOrPreview(postId: number): Observable<Posts.PostsGetResponse> {
		return this._request.get(this.apiUrl + 'posts/getDraftOrPreview', {
			postId: postId
		});
	}

	filter(params: Posts.PostFilterFilters): Observable<Posts.PostsFilterResponse> {
		return this._request.post(this.apiUrl + 'posts/filter', params);
	}
}