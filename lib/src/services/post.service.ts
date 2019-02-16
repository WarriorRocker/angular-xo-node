import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Observable, BehaviorSubject } from 'rxjs';

import { XoGlobals } from './globals.service';
import { XoPosts } from './api/posts/posts';

@Injectable()
export class XoPostService {
	private _postSource = new BehaviorSubject<XoPosts.Post>(null);

	post$ = this._postSource.asObservable();

	constructor(private _title: Title, private _globals: XoGlobals) { }

	setPost(post: XoPosts.Post) {
		const title = ((post.title) ? post.title + ' | ' : '') + this._globals.appConfig.app.title;
		this._title.setTitle(title);

		this._postSource.next(post);
	}
}