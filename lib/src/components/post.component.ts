import { Injectable, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { Observable } from 'rxjs';

import { Posts } from '../services/api/posts/posts';
import { PostService } from '../services/post.service';

@Injectable()
export class PostComponent implements OnInit {
	post: Posts.Post;

	constructor(public _router: Router, public _route: ActivatedRoute,
		public _post: PostService) { }

	ngOnInit() {
		//this._router.events.subscribe(event => {
		//	if (event instanceof NavigationEnd) {
		//		this.setPost();
		//	}
		//});

		this.setPost();
	}

	setPost(): void {
		if (this._route.snapshot.data['post']) {
			this.post = this._route.snapshot.data['post'];
			this._post.setPost(this.post);
		}
	}
}