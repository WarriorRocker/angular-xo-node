/*
 * Public API Surface of angular-xo
 */

export { XoApi } from './src/services/api/api';
export { XoApiService } from './src/services/api/api.service';
export { XoApiRequestService } from './src/services/api/apiRequest.service';

export { XoConfig } from './src/services/api/config/config';
export { XoApiConfigService } from './src/services/api/config/config.service';

export { XoMenus } from './src/services/api/menus/menus';
export { XoApiMenusService } from './src/services/api/menus/menus.service';

export { XoOptions } from './src/services/api/options/options';
export { XoApiOptionsService } from './src/services/api/options/options.service';

export { XoPosts } from './src/services/api/posts/posts';
export { XoApiPostsService } from './src/services/api/posts/posts.service';

export { XoRoutes } from './src/services/api/routes/routes';
export { XoApiRoutesService } from './src/services/api/routes/routes.service';

export { XoTerms } from './src/services/api/terms/terms';
export { XoApiTermsService } from './src/services/api/terms/terms.service';

export { XoGlobals, XoGlobalsModule } from './src/services/globals.service';
export { XoRouteService, XoInitRoutes } from './src/services/route.service';

export { XoPostResolver } from './src/services/post.resolver';
export { XoPostService } from './src/services/post.service';

export { XoPostComponent } from './src/components/post.component';
export { XoPostsListComponent } from './src/components/postsList.component';

export { XoModule } from './src/angular-xo.module';