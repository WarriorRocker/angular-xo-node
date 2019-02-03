import { Api } from '../api';

export module Terms {
	interface TermsFilterResponse extends Api.Response {
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