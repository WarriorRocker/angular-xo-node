import { XoApi } from '../api';

export module XoRoutes {
	export interface RoutesGetResponse extends XoApi.Response {
		/**
		 * Collection of routes dynamically provided by Xo.
		 */
		routes?: Array<Route>;
	}

	export interface BreadcrumbsResponse extends XoApi.Response {
		/**
		 * Collection of fully formed breadcrumb sitemap objects.
		 */
		breadcrumbs?: Array<SitemapEntry>;
	}

	export interface SitemapResponse extends XoApi.Response {
		/**
		 * Collection of fully formed sitemap entry objects.
		 */
		entries?: Array<SitemapEntry>;
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

	export interface SitemapEntry {
		/**
		 * Title text of the sitemap entry.
		 */
		title?: string;

		/**
		 * Relative URL of the sitemap entry.
		 */
		url?: string;

		/**
		 * Collection of children which fall under the current parent.
		 */
		children?: Array<SitemapEntry>;
	}
}