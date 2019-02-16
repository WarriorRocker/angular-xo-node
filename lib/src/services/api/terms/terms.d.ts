import { XoApi } from '../api';

export module XoTerms {
	interface TermsFilterResponse extends XoApi.Response {
		terms?: Array<Term>;
	}

	export interface TermsFilterFilters {
		taxonomy?: string;
		order?: string;
		orderby?: string;
	}

	export interface Term {
		id?: number;
		slug?: string;
		name?: string;
		description?: string;
		parent?: number;
		group?: string;
		taxonomy?: string;
		taxonomyId?: number;
		url?: string;
		meta?: Array<TermMeta>;
	}

	export interface TermMeta {
		[name: string]: any;
	}
}