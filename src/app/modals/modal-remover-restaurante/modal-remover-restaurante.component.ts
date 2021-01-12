import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-remover-restaurante',
  templateUrl: './modal-remover-restaurante.component.html',
  styleUrls: ['./modal-remover-restaurante.component.css']
})
export class ModalRemoverRestauranteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {  }

}
