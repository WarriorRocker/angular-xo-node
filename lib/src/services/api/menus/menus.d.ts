import { XoApi } from '../api';

export module XoMenus {
	export interface MenusGetResponse extends XoApi.Response {
		items?: Array<NavigationItem>;
	}

	/**
	 * Single fully formed menu object.
	 */
	export interface NavigationItem {
		/**
		 * ID of the menu mapped from ID.
		 */
		id?: number;

		/**
		 * ID of the menu's parent mapped from menu_item_parent.
		 */
		parent?: number;

		/**
		 * Order of the menu mapped from menu_order.
		 */
		order?: number;

		/**
		 * Title of the menu mapped from title.
		 */
		title?: string;

		/**
		 * Relative URL of the menu or absolute if target is set to _blank.
		 */
		url?: string;

		/*
		 * Additional css classes that may be used in the front-end.
		 */
		classes?: string;

		/**
		 * Target for the anchor link.
		 */
		target?: string;
	}
}