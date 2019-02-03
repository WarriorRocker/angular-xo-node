﻿import { Api } from '../api';

export module Posts {
	export interface PostsGetResponse extends Api.Response {
		post?: Post;
	}

	export interface PostsFilterResponse extends Api.Response {
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

	export interface Post {
		id?: number;
		type?: string;
		title?: string;
		slug?: string;
		url?: string;
		date?: string;
		modified?: string;
		content?: string;
		fields?: PostFields;
		meta?: PostMeta;
		terms?: PostTerms
		breadcrumbs?: Array<Post>;
		archiveUrl?: string;
		prevUrl?: string;
		nextUrl?: string;
	}

	interface PostFields {
		[name: string]: any;
	}

	interface PostMeta {
	}

	interface PostTerms {
		[name: string]: Array<PostTerm>;
	}

	interface PostTerm {
		[name: string]: string;
	}
}