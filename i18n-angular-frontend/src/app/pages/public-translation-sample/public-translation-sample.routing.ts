import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicTranslationSampleComponent } from './public-translation-sample.component';

const routes: Routes = [
  { path: '', component: PublicTranslationSampleComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicTranslationSampleRoutingModule { }
