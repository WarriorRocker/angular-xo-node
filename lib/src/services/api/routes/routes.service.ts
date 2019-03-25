import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { XoApiService } from '../api.service';
import { XoRoutes } from './routes';

/**
 * Provide endpoints for retrieving dynamic routes and sitemap.
 */
@Injectable()
export class XoApiRoutesService extends XoApiService {
	/**
	 * Get the dynamic route configuration.
	 */
	get(): Observable<XoRoutes.RoutesGetResponse> {
		return this._request.get('/routes/get');
	}

	/**
	 * Get breadcrumb sitemap entries for the given URL.
	 */
	breadcrumbs(url: string): Observable<XoRoutes.BreadcrumbsResponse> {
		return this._request.get('/routes/breadcrumbs', {
			url: url
		});
	}

	/**
	 * Get sitemap entries for posts and terms.
	 */
	sitemap(): Observable<XoRoutes.SitemapResponse> {
		return this._request.get('/routes/sitemap');
	}
}