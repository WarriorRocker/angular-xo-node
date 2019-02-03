import { Api } from '../api';

export module Menus {
	export interface MenusGetResponse extends Api.Response {
		items?: Array<NavigationItem>;
	}

	export interface NavigationItem {
		id?: number;
		parent?: number;
		order?: number;
		title?: string;
		url?: string;
		classes?: string;
	}
}