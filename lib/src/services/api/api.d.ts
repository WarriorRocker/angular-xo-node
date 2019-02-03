export module Api {
	export interface Response {
		success?: boolean;
		message?: string;
	}

	export interface Cache {
		[key: string]: any;
	}
}