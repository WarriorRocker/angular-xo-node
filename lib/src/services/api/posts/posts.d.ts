import { XoApi } from '../api';

export module XoPosts {
	export interface PostsGetResponse extends XoApi.Response {
		post?: Post;
	}

	export interface PostsFilterResponse extends XoApi.Response {
		posts?: Array<Post>;
		total?: number;
	}

	export interface PostFilterFilters {
		postType?: string;
		postsPerPage?: number;
		currentPage?: number;
		order?: string;
		orderby?: string;
		search?: string;
		taxQuery?: any;
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

	interface PostFields {
		[name: string]: any;
	}

	interface PostMeta {
		[name: string]: any;
	}

	interface PostTerms {
		[name: string]: Array<PostTerm>;
	}

	interface PostTerm {
		[name: string]: string;
	}
}