import { Injectable, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { Observable } from 'rxjs';

import { XoGlobals } from '../../services/globals/globals.service';

import { XoPosts } from '../../services/api/posts/posts';
import { XoRoutes } from '../../services/api/routes/routes';

@Injectable()
export class XoPostComponent implements OnInit {
	breadcrumbs: Array<XoRoutes.SitemapEntry>;
	post: XoPosts.Post;

	constructor(public _router: Router, public _route: ActivatedRoute,
		public _title: Title, public _globals: XoGlobals) {
		this._router.routeReuseStrategy.shouldReuseRoute = () => false;
	}

	ngOnInit() {
		this.setPost();
	}

	setPost(): void {
		if (this._route.snapshot.data['breadcrumbs']) {
			this.breadcrumbs = this._route.snapshot.data['breadcrumbs'];
		}

		if (this._route.snapshot.data['post']) {
			this.post = this._route.snapshot.data['post'];
			this.setTitle();
		}
	}

	setTitle(): void {
		const title = ((this.post.title) ? this.post.title + ' | ' : '') + this._globals.appConfig.app.title;
		this._title.setTitle(title);
	}
}