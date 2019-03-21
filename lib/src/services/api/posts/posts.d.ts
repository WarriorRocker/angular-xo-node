import { XoApi } from '../api';

export module XoPosts {
	export interface PostsGetResponse extends XoApi.Response {
		post?: Post;
	}

	export interface PostsFilterRequest {
		/**
		 * Name of the explicit post type to filter.
		 */
		postType?: string;

		/**
		 * Amount of posts to return per page, -1 returns all.
		 */
		postsPerPage?: number;

		/**
		 * The current page of posts to return.
		 */
		currentPage?: number;

		/**
		 * Sets the order direction of returned posts, defaults to 'DESC'.
		 */
		order?: string;

		/**
		 * Property of the post to order by.
		 */
		orderby?: string;

		/**
		 * Optional search query, split on spaces.
		 */
		search?: string;

		/**
		 * Additional taxonomy filters.
		 */
		taxQuery?: any;
	}

	export interface PostsFilterResponse extends XoApi.Response {
		/**
		 * Collection of posts returned for given filters and pagination.
		 */
		posts?: Array<Post>;

		/**
		 * Amount of posts returned for the given filters and pagination.
		 */
		count?: number;

		/**
		 * Amount of posts possible for the given filters.
		 */
		total?: number;
	}

	export interface PostsConfigResponse extends XoApi.Response {
		config?: any;
	}

	/**
	 * Single fully formed post object.
	 */
	export interface Post {
		/**
		 * ID of the post mapped from ID.
		 */
		id?: number;

		/**
		 * ID of the post's parent mapped from post_parent.
		 */
		parent?: number;

		/**
		 * Name of the post type mapped from post_type.
		 */
		type?: string;

		/**
		 * Url slug of the post mapped from post_name.
		 */
		slug?: string;

		/**
		 * Title of the post mapped from post_title.
		 */
		title?: string;

		/**
		 * Order of the post mapped from menu_order.
		 */
		order?: number;

		/**
		 * Date of the post mapped from post_date.
		 */
		date?: string;

		/**
		 * Modified date of the post mapped from post_modified.
		 */
		modified?: string;

		/**
		 * Content of the post mapped from post_content with the_content filter applied.
		 */
		content?: string;

		/**
		 * Relative URL of the post using get_permalink and wp_make_link_relative.
		 */
		url?: string;

		/**
		 * Optional collection of terms applied to the given post.
		 */
		terms?: PostTerms

		/**
		 * Optional collection of meta set for the given post.
		 */
		meta?: PostMeta;

		/**
		 * Optional collection of ACF fields set for the given post.
		 */
		fields?: PostFields;

		/**
		 * Optional set of breadcrumb items for the given post's URL.
		 */
		breadcrumbs?: Array<Post>;
	}

	export interface PostFields {
		/**
		 * Generic declaration for additional post fields.
		 */
		[name: string]: any;
	}

	export interface PostMeta {
		/**
		 * Generic declaration for additional post meta.
		 */
		[name: string]: any;
	}

	export interface PostTerms {
		/**
		 * Generic declaration for additional post taxonomies.
		 */
		[name: string]: Array<PostTerm>;
	}

	export interface PostTerm {
		/**
		 * Generic declaration for additional post taxonomy terms.
		 */
		[name: string]: string;
	}
}