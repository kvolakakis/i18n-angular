import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicCoreComponent } from './public-core.component';

const routes: Routes = [
  {
    path: '',
    component: PublicCoreComponent,
    children: [
      {
        path: 'translation-sample',
        loadChildren: () => import('../public-translation-sample/public-translation-sample.module').then((m) => m.PublicTranslationSampleModule),
      }
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicCoreRoutingModule { }
