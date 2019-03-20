import { Injectable, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { XoPosts } from '../../services/api/posts/posts';
import { XoApiPostsService } from '../../services/api/posts/posts.service';
import { XoPostComponent } from './post.component';
import { XoPostService } from '../../services/posts/post.service';

@Injectable()
export class XoPostsListComponent extends XoPostComponent {
	posts: Array<XoPosts.Post> = [];
	postsTotal: number = 0;
	pageCount: number = 0;
	postsFilterArgs: XoPosts.PostsFilterFilters = {
		currentPage: 1,
		postsPerPage: 10
	};

	constructor(public _router: Router, public _route: ActivatedRoute,
		public _post: XoPostService, public _posts: XoApiPostsService) {
		super(_router, _route, _post);
	}

	ngOnInit(): void {
		this.post = this._route.snapshot.data['post'];
		this.getPosts();
	}

	getPosts(): void {
		this._posts.filter(this.postsFilterArgs)
			.subscribe((response) => {
				if (response.success) {
					this.posts = response.posts;
					this.postsTotal = response.total;
					this.setPageCount();
				}
			});
	}

	setPageCount(): void {
		if (this.postsFilterArgs.postsPerPage)
			this.pageCount = Math.ceil(this.postsTotal / this.postsFilterArgs.postsPerPage);
		else
			this.pageCount = 1;
	}
}