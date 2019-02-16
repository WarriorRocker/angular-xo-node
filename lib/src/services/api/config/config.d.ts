import { XoApi } from '../api';

export module XoConfig {
	export interface ConfigGetResponse extends XoApi.Response {
		config: AppConfig;
	}

	export interface AppConfig {
		app?: AppConfigApp;
		paths?: AppConfigPaths;
	}

	interface AppConfigApp {
		title?: string;
		version?: string;
		debug?: boolean;
		url?: string;
	}

	interface AppConfigPaths {
		templatUrl?: string;
		apiUrl?: string;
	}
}