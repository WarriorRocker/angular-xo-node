import { NgModule } from '@angular/core';

import { XoApiService } from './api.service';
import { XoApiRequestService } from './apiRequest.service';
import { XoApiConfigService } from './config/config.service';
import { XoApiMenusService } from './menus/menus.service';
import { XoApiOptionsService } from './options/options.service';
import { XoApiPostsService } from './posts/posts.service';
import { XoApiRoutesService } from './routes/routes.service';
import { XoApiTermsService } from './terms/terms.service';

@NgModule({
	providers: [
		XoApiService,
		XoApiRequestService,
		XoApiOptionsService,
		XoApiMenusService,
		XoApiPostsService,
		XoApiTermsService,
		XoApiRoutesService
	]
})
export class XoApiModule { }