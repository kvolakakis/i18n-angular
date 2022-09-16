import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/global/services';
// import * as _ from "lodash";
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
    /**
     * Simple example of text supported in english and greek.
     */
    this.sampleText = {
      el: 'Κείμενο από αντικείμενο της Typescript',
      en: 'Text from Typescript object'
    };

    /**
     * This is a more realistic example of a Post tha can be retrieved from backend.
     * Wherever you need text content that supports multiple languages (in this case the 'content' object)
     * You have to define an object looking like this, with the corresponding text for each supported language.
     */
    this.samplePost = {
      content: {
        en: "This is the first post.",
        el: "Αυτή είναι η πρώτη δημοσίευση."
      },
      createdBy: {
        fullName: "Dummy User"
      },
      createdAt: "2022-05-28T09:23:06.103Z"
    }

  }

  ngOnInit(): void {
    this.translationService.activeLanguage$.subscribe((lang) => {
      this.selectedLang = lang as 'el' | 'en';
    })
    this.sampleTextOut = JSON.parse(JSON.stringify(this.sampleText)); // <-- you can either use this
    // this.sampleTextOut = _.cloneDeep(this.sampleText); // <-- or this (after importing 'lodash')

  }
}
