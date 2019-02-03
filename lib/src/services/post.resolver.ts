import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { ApiPostsService } from './api/posts/posts.service';

@Injectable()
export class PostResolver implements Resolve<any> {
	constructor(private _postService: ApiPostsService) { }

	resolve(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) {
		return new Promise((resolve, reject) => {
			const previewId: number = _route.queryParams['preview_id'];

			const onSubscribe = (response) => {
				if (response.success)
					resolve(response.post);
				reject();
			};

			if (_route.data.postId) {
				this._postService.getDraftOrPreview(_route.data.postId)
					.subscribe(onSubscribe);
			} else if (_route.parent.data['postPreview']) {
				this._postService.getDraftOrPreview(_route.params['slug'])
					.subscribe(onSubscribe);
			} else {
				const url = ((_route.data.url) ? (_route.data.url) : _state.url.split(/[?#]/)[0]);
				this._postService.getPage(url).subscribe(onSubscribe);
			}
		});
	}
}