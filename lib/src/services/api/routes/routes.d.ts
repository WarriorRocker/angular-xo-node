import { XoApi } from '../api';

export module XoRoutes {
	export interface RoutingGetResponse extends XoApi.Response {
		/**
		 * Collection of routes dynamically provided by Xo.
		 */
		routes?: Array<Route>;
	}

	export interface RoutingSitemapResponse extends XoApi.Response {
		sitemap?: any;
	}

	export interface Route {
		/**
		 * The path property of the Angular Route item.
		 */
		path?: string;

		/**
		 * The loadChildren property of the Angular Route item.
		 */
		loadChildren?: string;

		/**
		 * The pathMatch property of the Angular Route item.
		 */
		pathMatch?: string;

		/**
		 * Additional data added to the data property of the Angular Route item.
		 */
		data?: RouteData;
	}

	export interface RouteData {
		/**
		 * Optionally override the URL which the XoPostResolver will request.
		 */
		url?: string;

		/**
		 * The ID of the post to retrieve when viewing a draft or preview route.
		 */
		postId?: number;

		/**
		 * Use the :slug portion of the route as the ID of a post preview or draft route.
		 */
		postPreview?: boolean;
	}
}