import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { ApiModule} from './services/api/api.module';

import { GlobalsModule } from './services/globals.service';

import { PostService } from './services/post.service';
import { RouteService } from './services/route.service';
import { PostResolver } from './services/post.resolver';

import { PostComponent } from './components/post.component';
import { PostsListComponent } from './components/postsList.component';

@NgModule({
	imports: [
		BrowserModule,
		GlobalsModule.forBrowser(),
		HttpClientModule,
		RouterModule,
		ApiModule
	],
	providers: [
		RouteService,
		PostService,
		PostResolver,
		PostComponent,
		PostsListComponent
	]
})
export class AngularXoModule { }