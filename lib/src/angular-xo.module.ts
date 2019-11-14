import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { XoGlobalsModule } from './services/globals/globals.service';
import { XoApiModule } from './services/api/api.module';

import { XoRouteService } from './services/routes/route.service';

import { XoPostResolver } from './services/posts/post.resolver';
import { XoTermResolver } from './services/terms/term.resolver';
import { XoBreadcrumbsResolver } from './services/routes/breadcrumbs.resolver';

import { XoPostComponent } from './components/posts/post.component';
import { XoPostsListComponent } from './components/posts/postsList.component';
import { XoPostTermComponent } from './components/posts/postTerm.component';
import { XoTermComponent } from './components/terms/term.component';

@NgModule({
	imports: [
		BrowserModule,
		RouterModule,
		HttpClientModule,
		XoGlobalsModule.forBrowser(),
		XoApiModule
	],
	providers: [
		XoRouteService,
		XoPostResolver,
		XoPostComponent,
		XoPostsListComponent,
		XoPostTermComponent,
		XoTermResolver,
		XoTermComponent,
		XoBreadcrumbsResolver
	]
})
export class XoModule {}
