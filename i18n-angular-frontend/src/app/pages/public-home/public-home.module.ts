import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PublicHomeComponent } from './public-home.component';
import { PublicHomeRoutingModule } from './public-home.routing';

@NgModule({
  declarations: [PublicHomeComponent],
  imports: [
    PublicHomeRoutingModule,
    TranslateModule
  ],
})
export class PublicHomeModule { }
