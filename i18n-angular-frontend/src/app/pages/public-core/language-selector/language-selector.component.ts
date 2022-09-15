import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService } from 'src/app/global/services';

interface LanguageFlag {
  lang: string;
  name: string;
  active?: boolean;
}

@Component({
  selector: 'language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit, OnDestroy {

  @Input() theme: 'light' | 'dark';

  public language!: LanguageFlag;
  public readonly languages: LanguageFlag[] = [
    { lang: 'en', name: 'English', },
    { lang: 'el', name: 'Ελληνικά' }
  ];
  private langSub: Subscription;


  constructor(private translationService: TranslationService) {
    this.theme = 'light';
    this.langSub = new Subscription();
  }

  ngOnInit() {
    this.langSub = this.translationService.activeLanguage$
      .subscribe(lang => this.setSelectedLanguage(lang));
  }

  ngOnDestroy() {
    this.langSub.unsubscribe();
  }

  public setLanguage(lang: string, onlyInternal: boolean = false) {
    this.languages.forEach((language) => {
      if (language.lang === lang) {
        language.active = true;
        this.language = language;
      } else {
        language.active = false;
      }
    });

    if (!onlyInternal) {
      this.translationService.setLanguage(lang);
    }
  }

  private setSelectedLanguage(lang: string): any {
    this.setLanguage(lang, true);
  }

}
