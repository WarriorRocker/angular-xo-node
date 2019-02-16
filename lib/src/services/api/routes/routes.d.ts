import { XoApi } from '../api';

export module XoRoutes {
	export interface RoutingGetResponse extends XoApi.Response {
		routes?: Array<any>;
	}

	export interface RoutingSitemapResponse extends XoApi.Response {
		sitemap?: any;
	}
}