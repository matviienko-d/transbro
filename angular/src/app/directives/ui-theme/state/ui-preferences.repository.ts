import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { createStore, select, withProps } from '@ngneat/elf';
import { persistState } from '@ngneat/elf-persist-state';
import { UiThemes } from '@models/ui-preferences';
import { ChromeStorageEngineService } from '@services/chrome-storage.service';

interface UiPreferencesProps {
  theme: UiThemes;
}

const uiPreferencesStore = createStore(
  { name: 'ui-preferences' },
  withProps<UiPreferencesProps>({
    theme: UiThemes.DEFAULT,
  })
);

@Injectable()
export class UiPreferencesRepository {
  public theme$: Observable<UiThemes> = uiPreferencesStore.pipe(select((state) => state.theme));

  public constructor(private chromeStorage: ChromeStorageEngineService) {
    this.initializePersistStore();
  }

  public updateTheme(theme: UiThemes): void {
    uiPreferencesStore.update((state: UiPreferencesProps) => ({
      ...state,
      theme,
    }));
  }

  private initializePersistStore(): void {
    persistState(uiPreferencesStore, {
      key: 'ui-preferences',
      storage: this.chromeStorage,
    });
  }
}
