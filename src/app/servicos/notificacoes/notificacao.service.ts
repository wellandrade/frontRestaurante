import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Mensagem } from 'src/app/shared/Mensagem';

@Injectable({
  providedIn: 'root'
})

export class NotificacaoService {

  constructor(private notificacao: MatSnackBar) { }

  MensagemSucesso(mensagem: Mensagem): void {
    this.notificacao.open(mensagem.mensagem, 'Fechar', {
        duration: 2000
    });
  }

  MensagemErro(response: HttpErrorResponse): void {
    let mensagem: string;

    if (response.status == 0) {
      mensagem = 'Nao foi possivel obter conexao para cadastrar o restaurante';
    }
    else {
      mensagem = response.error.mensagem;
    }

    this.notificacao.open(mensagem, 'Fechar', {
      duration: 3000
    });
  }

  MensagemErroServicoExterno(mensagem: string): void {
    this.notificacao.open(mensagem, 'Fechar', {
      duration: 4000
    });
  }
}
