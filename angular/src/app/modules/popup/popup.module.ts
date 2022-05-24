import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PopupComponent } from './popup.component';
import { PopupRoutingModule } from './popup-routing.module';
import { UiThemeModule } from "@directives/ui-theme/ui-theme.module";

@NgModule({
  declarations: [PopupComponent],
  imports: [CommonModule, PopupRoutingModule, UiThemeModule]
})
export class PopupModule {}
