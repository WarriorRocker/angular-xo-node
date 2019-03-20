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

export { XoGlobals, XoGlobalsModule } from './src/services/globals/globals.service';

export { XoRouteService, XoInitRoutes } from './src/services/routes/route.service';

export { XoPostResolver } from './src/services/posts/post.resolver';
export { XoPostService } from './src/services/posts/post.service';

export { XoPostComponent } from './src/components/posts/post.component';
export { XoPostsListComponent } from './src/components/posts/postsList.component';

export { XoTermResolver } from './src/services/terms/term.resolver';
export { XoTermService } from './src/services/terms/term.service';

export { XoTermComponent } from './src/components/terms/term.component';

export { XoModule } from './src/angular-xo.module';