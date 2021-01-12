import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalRemoverRestauranteComponent } from 'src/app/modals/modal-remover-restaurante/modal-remover-restaurante.component';
import { RestauranteService } from 'src/app/servicos/restaurante.service';
import { RestauranteListagem } from 'src/app/shared/RestauranteListagem';

@Component({
  selector: 'app-listar-restaurante',
  templateUrl: './listar-restaurante.component.html',
  styleUrls: ['./listar-restaurante.component.css']
})
export class ListarRestauranteComponent implements OnInit {

  listaRestaurante: RestauranteListagem[];
  selection = new SelectionModel<RestauranteListagem[]>(true, []);

  constructor(private restauranteService: RestauranteService, 
              public dialog: MatDialog) {
  }

  displayedColumns: string[] = [ 'Id', 'Nome', 'Localizacao', 'TipoCozinha', 'Alterar', 'Remover' ];

  ngOnInit(): void {

    this.restauranteService.listarTodosRestaurantes().subscribe(dados => {
      this.listaRestaurante = dados;
    });
  }

  abrirModal(idRestaurante: number, nome: string): void {

    console.log(idRestaurante);

    let modalRef = this.dialog.open(ModalRemoverRestauranteComponent, {
      data: {nomeRestaurante: nome}
    });

    modalRef.afterClosed().subscribe(resultado => {
      console.log(`Passou aqui: ${resultado}`);
    });
  }
}
