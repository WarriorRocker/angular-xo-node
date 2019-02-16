import { NgModule, ModuleWithProviders } from '@angular/core';

import { XoApi } from './api/api';
import { XoConfig } from './api/config/config';

export abstract class XoGlobals { 
	abstract get appConfig(): XoConfig.AppConfig;
	abstract get apiCache(): XoApi.Cache;
}

export class XoBrowserGlobals extends XoGlobals {
	get appConfig(): XoConfig.AppConfig {
		return window['appConfig'] || {} as XoConfig.AppConfig;
	}

	get apiCache(): XoApi.Cache {
		return window['apiCache'] || {} as XoApi.Cache;
	}
}

export class XoNodeGlobals extends XoGlobals {
	get appConfig(): XoConfig.AppConfig {
		return {};
	}

	get apiCache(): XoApi.Cache {
		return {};
	}
}

@NgModule({})
export class XoGlobalsModule {
	static forBrowser(): ModuleWithProviders {
		return {
			ngModule: XoGlobalsModule,
			providers: [
				{ provide: XoGlobals, useClass: XoBrowserGlobals }
			]
		};
	}

	static forNode(): ModuleWithProviders {
		return {
			ngModule: XoGlobalsModule,
			providers: [
				{ provide: XoGlobals, useClass: XoNodeGlobals }
			]
		};
	}
}