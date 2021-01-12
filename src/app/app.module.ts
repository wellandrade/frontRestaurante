import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CadastrarRestauranteComponent } from './cadastro/cadastrar-restaurante/cadastrar-restaurante.component';
import { ListarRestauranteComponent } from './consulta/listar-restaurante/listar-restaurante.component';

/* Formulario */
import { ReactiveFormsModule } from '@angular/forms';

/* Pipe */ 
import { FormatarCEPPipe } from './pipes/formatar-cep.pipe';
import { FormatarTipoCozinhaPipe } from './pipes/formatar-tipo-cozinha.pipe';

/* Angular material  */
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalRemoverRestauranteComponent } from './modals/modal-remover-restaurante/modal-remover-restaurante.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarRestauranteComponent,
    FormatarCEPPipe,
    ListarRestauranteComponent,
    FormatarTipoCozinhaPipe,
    ModalRemoverRestauranteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})

export class AppModule { }
