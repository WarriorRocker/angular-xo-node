import { Injectable, Injector } from '@angular/core';
import { Router, Routes } from '@angular/router';

import { ApiRoutesService } from './api/routes/routes.service';

@Injectable()
export class RouteService {
	constructor(private _injector: Injector,
		private _routesService: ApiRoutesService) { }

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

export function InitRoutes(_routeService: RouteService) {
	return () => _routeService.getRoutes();
}