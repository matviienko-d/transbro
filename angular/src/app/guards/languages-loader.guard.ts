import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { LibreTranslationService } from '@services/libre-translation.service';
import { map } from 'rxjs/operators';
import { AllLanguagesItem } from '@models/libre-translation';

// TODO: investigate Guard observer
@Injectable()
export class LanguagesLoaderGuard implements CanActivate {
  public constructor(private libreTranslationService: LibreTranslationService) {}

  public canActivate(): Observable<boolean> {
    return this.libreTranslationService
      .getListOfSupportedLanguages()
      .pipe(map((languages: AllLanguagesItem[]) => !!languages));
  }
}
