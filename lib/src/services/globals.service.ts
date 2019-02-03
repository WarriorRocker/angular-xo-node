import { NgModule, ModuleWithProviders } from '@angular/core';

import { Api } from './api/api';
import { Config } from './api/config/config';

export abstract class Globals { 
	abstract get appConfig(): Config.AppConfig;
	abstract get apiCache(): Api.Cache;
}

export class BrowserGlobals extends Globals {
	get appConfig(): Config.AppConfig {
		return window['appConfig'] || {} as Config.AppConfig;
	}

	get apiCache(): Api.Cache {
		return window['apiCache'] || {} as Api.Cache;
	}
}

export class NodeGlobals extends Globals {
	get appConfig(): Config.AppConfig {
		return {};
	}

	get apiCache(): Api.Cache {
		return {};
	}
}

@NgModule({})
export class GlobalsModule {
	static forBrowser(): ModuleWithProviders {
		return {
			ngModule: GlobalsModule,
			providers: [
				{ provide: Globals, useClass: BrowserGlobals }
			]
		};
	}

	static forNode(): ModuleWithProviders {
		return {
			ngModule: GlobalsModule,
			providers: [
				{ provide: Globals, useClass: NodeGlobals }
			]
		};
	}
}