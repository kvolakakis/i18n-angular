import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'core',
        loadChildren: () =>
          import('./pages/public-core/public-core.module').then((m) => m.PublicCoreModule),
      },
      { path: '**', redirectTo: 'core', pathMatch: 'full' },
    ],
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
