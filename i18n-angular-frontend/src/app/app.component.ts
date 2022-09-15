import { Component } from '@angular/core';
import { TranslationService } from './global';
declare var require: any;
const el = require('./global/i18n/el.json');
import { enLocale } from './global/i18n';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'i18n-angular-frontend';

  constructor(private translationService: TranslationService) {
    const elLocale = { lang: 'el', data: el };
    this.translationService.loadTranslations(elLocale, enLocale);
    // set default language
    this.translationService.setLanguage(this.translationService.getSelectedLanguage() as any);
  }
}
