import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { XoTerms } from '../api/terms/terms';
import { XoApiTermsService } from '../api/terms/terms.service';

@Injectable()
export class XoTermResolver implements Resolve<any> {
	constructor(private _termsService: XoApiTermsService) { }

	resolve(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) {
		return new Promise((resolve, reject) => {
			const onSubscribe = (response: XoTerms.TermsGetResponse) => {
				if (response.success)
					resolve(response.term);
				reject();
			};

			const url = ((_route.data.url) ? (_route.data.url) : _state.url.split(/[?#]/)[0]);
			this._termsService.get(url).subscribe(onSubscribe);
		});
	}
}