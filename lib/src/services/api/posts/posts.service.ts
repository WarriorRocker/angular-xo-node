import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { XoApiService } from '../api.service';
import { XoPosts } from './posts';

/**
 * Provide endpoints for retrieving, searching, and listing various post types.
 */
@Injectable()
export class XoApiPostsService extends XoApiService {
	/**
	 * Get a post using either the relative URL or postId.
	 */
	get(url: string): Observable<XoPosts.PostsGetResponse> {
		return this._request.get('/posts/get', {
			url: url
		});
	}

	/**
	 * Get a post draft or preview only if user logged in and can view.
	 */
	getDraftOrPreview(postId: number): Observable<XoPosts.PostsGetResponse> {
		return this._request.get('/posts/getDraftOrPreview', {
			postId: postId
		});
	}

	/**
	 * Filter, search, or list posts by various properties similar to get_posts().
	 */
	filter(params: XoPosts.PostsFilterRequest): Observable<XoPosts.PostsFilterResponse> {
		return this._request.post('/posts/filter', params);
	}

	/**
	 * Retrieve the config for a given post type.
	 */
	config(postType: string): Observable<XoPosts.PostsConfigResponse> {
		return this._request.get('/posts/config', {
			postType: postType
		});
	}
}