import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Observable, BehaviorSubject } from 'rxjs';

import { XoGlobals } from '../globals/globals.service';
import { XoTerms } from '../api/terms/terms';

@Injectable()
export class XoTermService {
	private _termSource = new BehaviorSubject<XoTerms.Term>(null);

	term$ = this._termSource.asObservable();

	constructor(private _title: Title, private _globals: XoGlobals) { }

	setTerm(term: XoTerms.Term) {
		const title = ((term.name) ? term.name + ' | ' : '') + this._globals.appConfig.app.title;
		this._title.setTitle(title);

		this._termSource.next(term);
	}
}