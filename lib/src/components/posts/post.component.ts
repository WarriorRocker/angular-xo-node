﻿import { Injectable, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { Observable } from 'rxjs';

import { XoGlobals } from '../../services/globals/globals.service';

import { XoPosts } from '../../services/api/posts/posts';

@Injectable()
export class XoPostComponent implements OnInit {
	post: XoPosts.Post;

	constructor(public _router: Router, public _route: ActivatedRoute,
		public _title: Title, public _globals: XoGlobals) {
		this._router.routeReuseStrategy.shouldReuseRoute = () => false;
	}

	ngOnInit() {
		this.setPost();
	}

	setPost(): void {
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