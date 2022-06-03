import { createStore } from '@ngneat/elf';
import { selectAllEntities, setEntities, withActiveId, withEntities } from '@ngneat/elf-entities';
import { AllLanguagesItem } from '@models/libre-translation';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

const languagesStore = createStore(
  { name: 'allLanguages' },
  withEntities<AllLanguagesItem, 'code'>({ idKey: 'code' }),
  withActiveId('en')
);

@Injectable()
export class AllLanguagesRepository {
  public allLanguages$: Observable<AllLanguagesItem[]> = languagesStore.pipe(selectAllEntities());

  public setLanguages(languages: AllLanguagesItem[]): void {
    languagesStore.update(setEntities(languages));
  }
}
