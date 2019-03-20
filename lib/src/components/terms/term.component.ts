import { Injectable, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { Observable } from 'rxjs';

import { XoTerms } from '../../services/api/terms/terms';
import { XoTermService } from '../../services/terms/term.service';

@Injectable()
export class XoTermComponent implements OnInit {
	term: XoTerms.Term;

	constructor(public _router: Router, public _route: ActivatedRoute,
		public _term: XoTermService) { }

	ngOnInit() {
		this.setTerm();
	}

	setTerm(): void {
		if (this._route.snapshot.data['term']) {
			this.term = this._route.snapshot.data['term'];
			this._term.setTerm(this.term);
		}
	}
}