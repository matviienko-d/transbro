import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PopupComponent } from './popup.component';
import { PopupRoutingModule } from './popup-routing.module';
import { UiThemeModule } from '@directives/ui-theme/ui-theme.module';
import { SwitcherComponent } from '@components/switcher/switcher.component';
import { ErrorPageComponent } from '@components/error-page/error-page.component';
import { LanguageSelectionBarModule } from '@modules/language-dropdown/language-selection-bar.module';
import { AllLanguagesRepository } from '@modules/language-dropdown/state/all-languages.repository';
import { IconModule } from '@modules/icon/icon.module';
import { LanguagePreferencesRepository } from '@modules/language-dropdown/state/language-preferences.repository';
import { LibreTranslationService } from '@services/libre-translation.service';
import {
  LANGUAGE_PREFERENCES_REPOS_FROM_STATE,
  LANGUAGE_PREFERENCES_REPOS_TO_STATE,
} from '@providers/language-preferences.repository.provider';
import { LanguagesLoaderGuard } from '@guards/languages-loader.guard';

@NgModule({
  declarations: [PopupComponent, SwitcherComponent, ErrorPageComponent],
  providers: [
    LibreTranslationService,
    AllLanguagesRepository,
    LanguagesLoaderGuard,
    {
      provide: LANGUAGE_PREFERENCES_REPOS_FROM_STATE,
      useClass: LanguagePreferencesRepository,
    },
    {
      provide: LANGUAGE_PREFERENCES_REPOS_TO_STATE,
      useClass: LanguagePreferencesRepository,
    },
  ],
  imports: [CommonModule, HttpClientModule, PopupRoutingModule, UiThemeModule, LanguageSelectionBarModule, IconModule],
})
export class PopupModule {}
