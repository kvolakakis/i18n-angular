import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PublicTranslationSampleComponent } from './public-translation-sample.component';
import { PublicTranslationSampleRoutingModule } from './public-translation-sample.routing';

@NgModule({
  declarations: [PublicTranslationSampleComponent],
  imports: [
    PublicTranslationSampleRoutingModule,
    TranslateModule
  ],
})
export class PublicTranslationSampleModule { }
