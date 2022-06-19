import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from "./components/main/content/welcome/welcome.component";
import {ResultListComponent} from "./components/main/content/result-list/result-list.component";
import {SearchRedirectComponent} from "./components/main/content/result-list/search-redirect/search-redirect.component";

const routes: Routes = [{
  path: '',
  redirectTo: 'welcome',
  pathMatch: 'full'
},
  {
    path: 'results',
    component: ResultListComponent
  }, {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'query',
    component: SearchRedirectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

