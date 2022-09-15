import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { I18nProperty } from '../../models/i18n-property.model';

export interface Locale {
  lang: string;
  // tslint:disable-next-line:ban-types
  data: Object;
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  private readonly DEFAULT_LANG = 'el';
  private langIds: string[] = [];
  public activeLanguage$: BehaviorSubject<string>;

  constructor(private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang(this.DEFAULT_LANG);
    this.activeLanguage$ = new BehaviorSubject(this.DEFAULT_LANG);
  }

  public loadTranslations(...args: Locale[]) {
    const locales = [...args];

    locales.forEach(locale => {
      // use setTranslation() with the third argument set to true
      // to append translations instead of replacing them
      this.translate.setTranslation(locale.lang, locale.data, true);

      this.langIds.push(locale.lang);
    });

    // add new languages to the list
    this.translate.addLangs(this.langIds);
  }

  public loadJSONTranslations(...args: string[]) {
    const langs = [...args];
    langs.forEach(lang => {
      // use setTranslation() with the third argument set to true
      // to append translations instead of replacing them
      this.translate.setTranslation('el', lang, true);

      this.langIds.push('el');
    });

    // add new languages to the list
    this.translate.addLangs(this.langIds);
  }

  public setLanguage(lang: string) {
    if (!lang) { return; }

    this.translate.use(this.translate.getDefaultLang());
    this.translate.use(lang);
    localStorage.setItem('language', lang);
    this.activeLanguage$.next(lang);
  }

  public getSelectedLanguage(): string | null {
    try {
      const storedLang = localStorage.getItem('language') as string;

      return this.translate.langs.includes(storedLang)
        ? storedLang
        : this.DEFAULT_LANG;

    } catch (e) {
      return this.DEFAULT_LANG;
    }
  }

  public getTranslation(i18nProp: I18nProperty): string | null | undefined {
    if (!i18nProp) { return null; }
    if (this.getSelectedLanguage() === 'el') {
      return i18nProp.el;
    } else {
      return i18nProp.en;
    }
  }

}
