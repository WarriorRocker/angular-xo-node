import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Observable, BehaviorSubject } from 'rxjs';

import { Globals } from './globals.service';
import { Posts } from './api/posts/posts';

@Injectable()
export class PostService {
	private _postSource = new BehaviorSubject<Posts.Post>(null);

	post$ = this._postSource.asObservable();

	constructor(private _title: Title, private _globals: Globals) { }

	setPost(post: Posts.Post) {
		const title = ((post.title) ? post.title + ' | ' : '') + this._globals.appConfig.app.title;
		this._title.setTitle(title);

		this._postSource.next(post);
	}
}