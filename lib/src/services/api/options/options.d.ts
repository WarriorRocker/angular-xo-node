import { XoApi } from '../api';

export module XoOptions {
	export interface OptionsGetResponse extends XoApi.Response {
		fields?: any;
	}
}