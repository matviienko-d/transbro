import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiPreferencesRepository } from '@directives/ui-theme/store/ui-preferences.repository';
import { ChromeStorageEngineService } from '@services/chrome-storage.service';
import { UiThemeDirective } from './ui-theme.directive';

@NgModule({
  declarations: [UiThemeDirective],
  imports: [CommonModule],
  providers: [UiPreferencesRepository, ChromeStorageEngineService],
  exports: [UiThemeDirective],
})
export class UiThemeModule {}
