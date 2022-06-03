import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { AllLanguagesItem } from '@models/libre-translation';
import { AllLanguagesRepository } from '@modules/language-dropdown/state/all-languages.repository';
import { LanguagePreferencesRepository } from '@modules/language-dropdown/state/language-preferences.repository';
import { pluck } from 'rxjs/operators';
import { slideDown } from '@modules/language-picker/animations/language-dropdown.animation';

// TODO: Investigate option of separate dropdown directive
@Component({
  selector: 'app-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideDown],
})
export class LanguagePickerComponent implements OnInit {
  @Input() languagePreferencesRepo: LanguagePreferencesRepository;
  public allLanguages$: Observable<AllLanguagesItem[]> = this.allLanguagesRepo.allLanguages$;
  public activeLanguage$: Observable<string>;
  public recentlyUsedLanguages$: Observable<AllLanguagesItem[]>;

  public constructor(private allLanguagesRepo: AllLanguagesRepository) {}

  public ngOnInit() {
    this.activeLanguage$ = this.languagePreferencesRepo.activeLanguage$.pipe(pluck('name'));
    this.recentlyUsedLanguages$ = this.languagePreferencesRepo.recentlyUsed$;
  }

  public isDropdownOpen(dropdown: NgbDropdown): boolean {
    return dropdown.isOpen();
  }

  public getDropdownAnimationState(dropdown: NgbDropdown): string {
    return dropdown.isOpen() ? 'show' : 'hide';
  }

  public onLanguageSelect(language: AllLanguagesItem): void {
    this.languagePreferencesRepo.addRecentlyUsedLanguage(language);
    this.languagePreferencesRepo.updateActiveLanguageByCode(language.code);
  }

  public onRecentlyLanguageRemove(languageCode: string): void {
    this.languagePreferencesRepo.deleteRecentlyUsedLanguageByCode(languageCode);
  }

  public isLanguageItemActive(languageCode: string): boolean {
    return this.languagePreferencesRepo.activeLanguage === languageCode;
  }
}
