import { Api } from '../api';

export module Options {
	export interface OptionsGetResponse extends Api.Response {
		fields?: any;
	}
}