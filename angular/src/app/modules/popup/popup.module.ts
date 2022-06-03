import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PopupComponent } from './popup.component';
import { PopupRoutingModule } from './popup-routing.module';
import { UiThemeModule } from '@directives/ui-theme/ui-theme.module';
import { SwitcherComponent } from '@components/switcher/switcher.component';
import { LanguageSelectionBarModule } from '@modules/language-dropdown/language-selection-bar.module';
import { AllLanguagesRepository } from '@modules/language-dropdown/state/all-languages.repository';
import { LibreTranslationService } from '@services/libre-translation.service';
import { LanguagesLoaderGuard } from '@guards/languages-loader.guard';
import {
  LANGUAGE_PREFERENCES_REPOS_FROM_STATE,
  LANGUAGE_PREFERENCES_REPOS_TO_STATE,
} from '@providers/language-preferences.repository.provider';
import { LanguagePreferencesRepository } from '@modules/language-dropdown/state/language-preferences.repository';

@NgModule({
  declarations: [PopupComponent, SwitcherComponent],
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
  imports: [CommonModule, HttpClientModule, PopupRoutingModule, UiThemeModule, LanguageSelectionBarModule],
})
export class PopupModule {}
