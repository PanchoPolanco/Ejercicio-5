import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      },
      {
        path: 'contactos',
        loadChildren: () => import('../contactos/contactos.module').then(m => m.ContactosPageModule)
      },
      {
        path: 'nuevocontacto',
        loadChildren: () => import('../nuevocontacto/nuevocontacto.module').then(m => m.NuevocontactoPageModule)
      },
      {
        path: 'editarcontacto/:id',
        loadChildren: () => import('../editarcontacto/editarcontacto.module').then(m => m.EditarcontactoPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
