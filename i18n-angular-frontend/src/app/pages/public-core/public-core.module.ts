import { NgModule } from '@angular/core';
import { PublicCoreComponent } from './public-core.component';
import { PublicCoreRoutingModule } from './public-core.routing';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    PublicCoreRoutingModule,
    TranslateModule,
    CommonModule
  ],
  declarations: [PublicCoreComponent, LanguageSelectorComponent],
  exports: [LanguageSelectorComponent]
})
export class PublicCoreModule { }
