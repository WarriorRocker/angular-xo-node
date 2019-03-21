import { XoApi } from '../api';

export module XoTerms {
	interface TermsGetResponse extends XoApi.Response {
		/**
		 * Single term object.
		 */
		term?: Term;
	}

	export interface TermsFilterRequest {
		/**
		 * Name of the taxonomy to filter terms.
		 */
		taxonomy?: string;

		/**
		 * Sets the order direction of returned terms, defaults to 'DESC'.
		 */
		order?: string;

		/**
		 * Property of the term to order by.
		 */
		orderby?: string;
	}

	interface TermsFilterResponse extends XoApi.Response {
		/**
		 * Collection of terms returned for given filters.
		 */
		terms?: Array<Term>;
	}

	/**
	 * Single fully formed Term object.
	 */
	export interface Term {
		/**
		 * ID of the term mapped from term_id.
		 */
		id?: number;

		/**
		 * ID of the term's parent mapped from parent.
		 */
		parent?: number;

		/**
		 * URL slug of the term mapped from slug.
		 */
		slug?: string;

		/**
		 * Name of the term mapped from name.
		 */
		name?: string;

		/**
		 * Description of the term mapped from description.
		 */
		description?: string;

		/**
		 * Group of the term mapped from group.
		 */
		group?: string;

		/**
		 * Taxonomy of the term mapped from taxonomy.
		 */
		taxonomy?: string;

		/**
		 * ID of the Taxonomy of the term mapped from term_taxonomy_id.
		 */
		taxonomyId?: number;

		/**
		 * Relative URL of the term using get_term_link and wp_make_link_relative.
		 */
		url?: string;

		/**
		 * Optional collection of meta set for the given term.
		 */
		meta?: TermMeta;

		/**
		 * Optional collection of ACF fields set for the given term.
		 */
		fields?: TermFields;
	}

	export interface TermMeta {
		[name: string]: any;
	}

	export interface TermFields {
		[name: string]: any;
	}
}