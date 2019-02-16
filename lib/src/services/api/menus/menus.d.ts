import { XoApi } from '../api';

export module XoMenus {
	export interface MenusGetResponse extends XoApi.Response {
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