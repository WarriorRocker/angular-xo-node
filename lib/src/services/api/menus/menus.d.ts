import { XoApi } from '../api';

export module XoMenus {
	export interface MenusGetResponse extends XoApi.Response {
		/**
		 * Collection of menu item objects.
		 */
		items?: Array<Menu>;
	}

	/**
	 * Single fully formed menu item object.
	 */
	export interface Menu {
		/**
		 * ID of the menu item mapped from ID.
		 */
		id?: number;

		/**
		 * ID of the menu item's parent mapped from menu_item_parent.
		 */
		parent?: number;

		/**
		 * Type of the object of the linked menu item mapped from type.
		 */
		type?: string;

		/**
		 * Link text of the menu item mapped from title.
		 */
		title?: string;

		/**
		 * Order of the menu item mapped from menu_order.
		 */
		order?: number;

		/**
		 * Date of the menu item mapped from post_date.
		 */
		date?: string;

		/**
		 * Modified date of the menu item mapped from post_modified.
		 */
		modified?: string;

		/**
		 * URL of the menu item or relative URL if using target="_blank" mapped from url.
		 */
		url?: string;

		/**
		 * Type of linked menu item object mapped from object.
		 */
		object?: string;

		/**
		 * ID of the linked menu item object mapped from object_id.
		 */
		objectId?: number;

		/*
		 * Additional CSS classes that may be used in the front-end.
		 */
		classes?: string;

		/**
		 * Target for the anchor link applied to the menu item.
		 */
		target?: string;
	}
}