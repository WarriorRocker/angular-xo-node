import { Api } from '../api';

export module Config {
	export interface ConfigGetResponse extends Api.Response {
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