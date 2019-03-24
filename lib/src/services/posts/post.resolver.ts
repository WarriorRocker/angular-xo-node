import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { XoPosts } from '../api/posts/posts';
import { XoApiPostsService } from '../api/posts/posts.service';

@Injectable()
export class XoPostResolver implements Resolve<any> {
	constructor(private _postService: XoApiPostsService) { }

	resolve(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) {
		return new Promise((resolve, reject) => {
			const onSubscribe = (response: XoPosts.PostsGetResponse) => {
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
				this._postService.get(url).subscribe(onSubscribe);
			}
		});
	}
}