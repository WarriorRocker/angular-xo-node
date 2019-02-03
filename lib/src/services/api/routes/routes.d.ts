import { Api } from '../api';

export module Routes {
	export interface RoutingGetResponse extends Api.Response {
		routes?: Array<any>;
	}

	export interface RoutingSitemapResponse extends Api.Response {
		sitemap?: any;
	}
}