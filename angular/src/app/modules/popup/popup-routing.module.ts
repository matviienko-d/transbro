import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopupComponent } from './popup.component';
import { LanguagesLoaderGuard } from '@guards/languages-loader.guard';

// TODO:  create error page for falsy CanActivate response
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PopupComponent,
    canActivate: [LanguagesLoaderGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopupRoutingModule {}
