import { createStore, Store } from '@ngneat/elf';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  withEntities,
  withActiveId,
  selectAllEntities,
  selectActiveEntity,
  setActiveId,
  addEntitiesFifo,
  getEntitiesIds,
  deleteEntities,
  getActiveId,
} from '@ngneat/elf-entities';
import { AllLanguagesItem } from '@models/libre-translation';

// TODO: add persist state functionality
@Injectable()
export class LanguagePreferencesRepository {
  private languagePreferencesStore: Store = createStore(
    { name: 'languagePreferences' },
    withEntities<AllLanguagesItem, 'code'>({ idKey: 'code', initialValue: [{ name: 'English', code: 'en' }] }),
    withActiveId('en')
  );
  public recentlyUsed$: Observable<AllLanguagesItem[]> = this.languagePreferencesStore.pipe(selectAllEntities());
  public activeLanguage$: Observable<AllLanguagesItem> = this.languagePreferencesStore.pipe(selectActiveEntity());

  public updateActiveLanguageByCode(activeLanguageCode: string): void {
    this.languagePreferencesStore.update(setActiveId(activeLanguageCode));
  }

  public addRecentlyUsedLanguage(language: AllLanguagesItem): void {
    const recentlyUsedCodes: string[] = this.languagePreferencesStore.query(getEntitiesIds());
    if (recentlyUsedCodes.includes(language.code)) {
      return;
    }

    this.languagePreferencesStore.update(addEntitiesFifo(language, { limit: 5 }));
  }

  public deleteRecentlyUsedLanguageByCode(languageCode: string) {
    this.languagePreferencesStore.update(deleteEntities(languageCode));
  }

  public get activeLanguage(): string {
    return this.languagePreferencesStore.query(getActiveId);
  }
}
