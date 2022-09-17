import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopupComponent } from './popup.component';
import { LanguagesLoaderGuard } from '@guards/languages-loader.guard';
import { ErrorPageComponent } from "@components/error-page/error-page.component";

// TODO: create error page for falsy CanActivate response
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PopupComponent,
    canActivate: [LanguagesLoaderGuard],
  },
/*  {
    path: '**',
    component: ErrorPageComponent
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopupRoutingModule {}
