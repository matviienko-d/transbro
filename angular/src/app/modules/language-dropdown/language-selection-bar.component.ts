import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import {
  LANGUAGE_PREFERENCES_REPOS_FROM_STATE,
  LANGUAGE_PREFERENCES_REPOS_TO_STATE,
} from '@providers/language-preferences.repository.provider';
import { LanguagePreferencesRepository } from '@modules/language-dropdown/state/language-preferences.repository';

@Component({
  selector: 'app-language-dropdown',
  templateUrl: './language-selection-bar.component.html',
  styleUrls: ['./language-selection-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSelectionBarComponent {
  public constructor(
    @Inject(LANGUAGE_PREFERENCES_REPOS_FROM_STATE)
    public readonly languagePreferencesRepoFromState: LanguagePreferencesRepository,
    @Inject(LANGUAGE_PREFERENCES_REPOS_TO_STATE)
    public readonly languagePreferencesRepoToState: LanguagePreferencesRepository
  ) {}
}
