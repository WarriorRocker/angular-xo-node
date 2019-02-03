import { NgModule } from '@angular/core';

import { ApiService } from './api.service';
import { ApiRequestService } from './apiRequest.service';
import { ApiConfigService } from './config/config.service';
import { ApiMenusService } from './menus/menus.service';
import { ApiOptionsService } from './options/options.service';
import { ApiPostsService } from './posts/posts.service';
import { ApiRoutesService } from './routes/routes.service';
import { ApiTermsService } from './terms/terms.service';

@NgModule({
	providers: [
		ApiService,
		ApiRequestService,
		ApiOptionsService,
		ApiMenusService,
		ApiPostsService,
		ApiTermsService,
		ApiRoutesService
	]
})
export class ApiModule { }