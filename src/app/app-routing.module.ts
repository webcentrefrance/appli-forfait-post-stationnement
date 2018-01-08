import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VilleListComponent } from './ville-list/ville-list.component';
import { VilleDetailComponent } from './ville-detail/ville-detail.component';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
    { path: '', component: VilleListComponent },
    { path: environment.rootUrl, component: VilleListComponent },
    { path: ':id', component: VilleDetailComponent },
    { path: (environment.rootUrl === '' ? environment.rootUrl : environment.rootUrl + '/') + ':id', component: VilleDetailComponent }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
