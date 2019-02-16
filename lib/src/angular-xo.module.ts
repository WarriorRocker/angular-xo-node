import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { XoApiModule} from './services/api/api.module';

import { XoGlobalsModule } from './services/globals.service';

import { XoPostService } from './services/post.service';
import { XoRouteService } from './services/route.service';
import { XoPostResolver } from './services/post.resolver';

import { XoPostComponent } from './components/post.component';
import { XoPostsListComponent } from './components/postsList.component';

@NgModule({
	imports: [
		BrowserModule,
		XoGlobalsModule.forBrowser(),
		HttpClientModule,
		RouterModule,
		XoApiModule
	],
	providers: [
		XoRouteService,
		XoPostService,
		XoPostResolver,
		XoPostComponent,
		XoPostsListComponent
	]
})
export class XoModule { }