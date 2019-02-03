/*
 * Public API Surface of angular-xo
 */

export { Api } from './src/services/api/api';
export { ApiService } from './src/services/api/api.service';
export { ApiRequestService } from './src/services/api/apiRequest.service';

export { Config } from './src/services/api/config/config';
export { ApiConfigService } from './src/services/api/config/config.service';

export { Menus } from './src/services/api/menus/menus';
export { ApiMenusService } from './src/services/api/menus/menus.service';

export { Options } from './src/services/api/options/options';
export { ApiOptionsService } from './src/services/api/options/options.service';

export { Posts } from './src/services/api/posts/posts';
export { ApiPostsService } from './src/services/api/posts/posts.service';

export { Routes } from './src/services/api/routes/routes';
export { ApiRoutesService } from './src/services/api/routes/routes.service';

export { Terms } from './src/services/api/terms/terms';
export { ApiTermsService } from './src/services/api/terms/terms.service';

export { Globals, GlobalsModule } from './src/services/globals.service';
export { RouteService, InitRoutes } from './src/services/route.service';

export { PostResolver } from './src/services/post.resolver';
export { PostService } from './src/services/post.service';

export { PostComponent } from './src/components/post.component';
export { PostsListComponent } from './src/components/postsList.component';

export { AngularXoModule } from './src/angular-xo.module';