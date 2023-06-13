import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    title: 'Client Module',
    path: 'client',
    loadChildren: () => import('./modules/client/client.module').then((m) => m.ClientModule),
  },
  {
    path: '**',
    redirectTo: 'client',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
