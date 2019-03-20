import { Injectable, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { Observable } from 'rxjs';

import { XoGlobals } from '../../services/globals/globals.service';

import { XoPosts } from '../../services/api/posts/posts';
import { XoTerms } from '../../services/api/terms/terms';

import { XoPostComponent } from './post.component';

@Injectable()
export class XoPostTermComponent extends XoPostComponent {
	term: XoTerms.Term;

	constructor(public _router: Router, public _route: ActivatedRoute,
		public _title: Title, public _globals: XoGlobals) {
		super(_router, _route, _title, _globals);
	}

	ngOnInit() {
		this.setPost();
		this.setTerm();
	}

	setTerm(): void {
		if (this._route.snapshot.data['term']) {
			this.term = this._route.snapshot.data['term'];
		}
	}
}