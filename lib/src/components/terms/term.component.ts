import { Injectable, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { Observable } from 'rxjs';

import { XoGlobals } from '../../services/globals/globals.service';

import { XoTerms } from '../../services/api/terms/terms';
import { XoRoutes } from '../../services/api/routes/routes';

@Injectable()
export class XoTermComponent implements OnInit {
	breadcrumbs: Array<XoRoutes.SitemapEntry>;
	term: XoTerms.Term;

	constructor(public _router: Router, public _route: ActivatedRoute,
		public _title: Title, public _globals: XoGlobals) {
		this._router.routeReuseStrategy.shouldReuseRoute = () => false;
	}

	ngOnInit() {
		this.setTerm();
	}

	setTerm(): void {
		if (this._route.snapshot.data['breadcrumbs']) {
			this.breadcrumbs = this._route.snapshot.data['breadcrumbs'];
		}

		if (this._route.snapshot.data['term']) {
			this.term = this._route.snapshot.data['term'];
			this.setTitle();
		}
	}

	setTitle(): void {
		const title = ((this.term.name) ? this.term.name + ' | ' : '') + this._globals.appConfig.app.title;
		this._title.setTitle(title);
	}
}