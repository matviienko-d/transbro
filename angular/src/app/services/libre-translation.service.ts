import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllLanguagesItem } from '@models/libre-translation';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AllLanguagesRepository } from '@modules/language-dropdown/state/all-languages.repository';

// Checkout LibreTranslate swagger: https://libretranslate.com/docs/#/
@Injectable()
export class LibreTranslationService {
  private baseUrl = 'https://libretranslate.com';

  public constructor(private http: HttpClient, private translationLanguagesRepo: AllLanguagesRepository) {}

  public getListOfSupportedLanguages(): Observable<AllLanguagesItem[]> {
    return this.http.get<AllLanguagesItem[]>(`${this.baseUrl}/languages`).pipe(
      tap((languages) => {
        this.translationLanguagesRepo.setLanguages(languages);
      })
    );
  }
}
