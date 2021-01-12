import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarRestauranteComponent } from './cadastro/cadastrar-restaurante/cadastrar-restaurante.component';

import { ListarRestauranteComponent } from './consulta/listar-restaurante/listar-restaurante.component';

const routes: Routes = [
  { path: '', component: CadastrarRestauranteComponent },
  { path: 'listar-restaurante', component: ListarRestauranteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
