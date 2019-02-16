import { Injectable, Injector } from '@angular/core';
import { Router, Routes } from '@angular/router';

import { XoApiRoutesService } from './api/routes/routes.service';

@Injectable()
export class XoRouteService {
	constructor(private _injector: Injector,
		private _routesService: XoApiRoutesService) { }

	getRoutes(): Promise<any> {
		const router = this._injector.get(Router);

		return new Promise((resolve, reject) => {
			this._routesService.get()
				.subscribe((response) => {
					if (response.success)
						router.resetConfig(response.routes);

					resolve(true);
				});
		});
	}
}

export function XoInitRoutes(_routeService: XoRouteService) {
	return () => _routeService.getRoutes();
}