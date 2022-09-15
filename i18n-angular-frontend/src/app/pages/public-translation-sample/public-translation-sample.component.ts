import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/global/services';

@Component({
  selector: 'app-public-translation-sample',
  templateUrl: './public-translation-sample.component.html',
  styleUrls: ['./public-translation-sample.component.scss']
})
export class PublicTranslationSampleComponent implements OnInit {

  public sampleText: { el: string, en: string };
  public sampleTextOut: any;
  public samplePost: any = null;

  public selectedLang: string = '';
  constructor(
    private translationService: TranslationService
  ) {
    this.sampleText = {
      el: 'Κείμενο από αντικείμενο της Typescript',
      en: 'Text from Typescript object'
    };


  }

  ngOnInit(): void {
    this.translationService.activeLanguage$.subscribe((lang) => {
      this.selectedLang = lang as 'el' | 'en';
    })
    this.sampleTextOut = JSON.parse(JSON.stringify(this.sampleText));
    // this.sampleTextOut = _.cloneDeep(this.sampleText);

  }
}
