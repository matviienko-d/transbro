import { Directive, Inject, OnDestroy, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UiTheme, UiThemes } from '@models/ui-preferences';
import { generateThemeStyles } from '@utils/ui-theme/ui-theme';
import { DEFAULT_THEME } from '@directives/ui-theme/themes/default-theme';
import { UiPreferencesRepository } from '@directives/ui-theme/store/ui-preferences.repository';
import { DARK_THEME } from '@directives/ui-theme/themes/dark-theme';

@Directive({
  selector: '[uiTheme]',
})
export class UiThemeDirective implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();
  private readonly theme$: Observable<UiThemes> = this.themeRepo.theme$;

  constructor(@Inject(DOCUMENT) private document: Document, private themeRepo: UiPreferencesRepository) {}

  ngOnInit(): void {
    this.addThemeNodeToDom();
    this.setTheme(DEFAULT_THEME);

    this.theme$.pipe(takeUntil(this.destroy$)).subscribe({
      next: (theme: UiThemes) => {
        theme === UiThemes.DEFAULT ? this.setTheme(DEFAULT_THEME) : this.setTheme(DARK_THEME);
      },
    });
  }

  private addThemeNodeToDom(): void {
    if (!!this.themeNode) {
      return;
    }

    const themeNode = document.createElement('style');
    themeNode.id = 'ui-variables';
    this.document.head.append(themeNode);
  }

  private setTheme(themeConfig: UiTheme): void {
    this.themeNode.textContent = generateThemeStyles(themeConfig);
  }

  private get themeNode(): HTMLElement {
    return document.getElementById('ui-variables');
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
