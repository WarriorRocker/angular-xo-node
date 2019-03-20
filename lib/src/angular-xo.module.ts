import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { XoApiModule} from './services/api/api.module';

import { XoGlobalsModule } from './services/globals/globals.service';

import { XoRouteService } from './services/routes/route.service';

import { XoPostResolver } from './services/posts/post.resolver';

import { XoPostComponent } from './components/posts/post.component';
import { XoPostsListComponent } from './components/posts/postsList.component';
import { XoPostTermComponent } from './components/posts/postTerm.component';

import { XoTermResolver } from './services/terms/term.resolver';

import { XoTermComponent } from './components/terms/term.component';

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
		XoPostResolver,
		XoPostComponent,
		XoPostsListComponent,
		XoPostTermComponent,
		XoTermResolver,
		XoTermComponent
	]
})
export class XoModule { }