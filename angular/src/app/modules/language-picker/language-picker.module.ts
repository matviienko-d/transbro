import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { LanguagePickerComponent } from '@modules/language-picker/language-picker.component';
import { LanguagePreferencesRepository } from '@modules/language-dropdown/state/language-preferences.repository';
import {
  LANGUAGE_PREFERENCES_REPOS_FROM_STATE,
  LANGUAGE_PREFERENCES_REPOS_TO_STATE,
} from '@providers/language-preferences.repository.provider';
import { IconComponent } from "@components/icon/icon.component";

@NgModule({
  declarations: [LanguagePickerComponent, IconComponent],
  providers: [
    { provide: LANGUAGE_PREFERENCES_REPOS_FROM_STATE, useClass: LanguagePreferencesRepository },
    { provide: LANGUAGE_PREFERENCES_REPOS_TO_STATE, useClass: LanguagePreferencesRepository },
  ],
  imports: [CommonModule, PerfectScrollbarModule, NgbDropdownModule],
  exports: [LanguagePickerComponent],
})
export class LanguagePickerModule {}
