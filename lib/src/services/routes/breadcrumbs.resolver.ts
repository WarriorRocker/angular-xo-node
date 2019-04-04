import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { XoRoutes } from '../api/routes/routes';
import { XoApiRoutesService } from '../api/routes/routes.service';

@Injectable()
export class XoBreadcrumbsResolver implements Resolve<any> {
	constructor(private _routesService: XoApiRoutesService) { }

	resolve(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) {
		return new Promise((resolve, reject) => {
			const onSubscribe = (response: XoRoutes.BreadcrumbsResponse) => {
				if (response.success)
					resolve(response.breadcrumbs);

				resolve();
			};

			const url = ((_route.data.url) ? (_route.data.url) : _state.url.split(/[?#]/)[0]);
			this._routesService.breadcrumbs(url).subscribe(onSubscribe);
		});
	}
}