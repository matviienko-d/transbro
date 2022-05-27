import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UiPreferencesRepository } from '@directives/ui-theme/store/ui-preferences.repository';
import { UiThemes } from '@models/ui-preferences';

@Component({
  selector: 'app-popup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'popup.component.html',
  styleUrls: ['popup.component.scss'],
})
export class PopupComponent {
  public isDarkThemeActive$: Observable<boolean> = this.themeRepo.theme$.pipe(
    map((theme: UiThemes) => theme === UiThemes.DARK)
  );

  constructor(private uiPreferencesStore: UiPreferencesRepository, private themeRepo: UiPreferencesRepository) {}

  onThemeChanged(isChecked: boolean): void {
    const currentTheme = isChecked ? UiThemes.DARK : UiThemes.DEFAULT;
    this.uiPreferencesStore.updateTheme(currentTheme);
  }
}
