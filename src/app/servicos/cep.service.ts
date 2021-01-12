import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endereco } from '../shared/Endereco';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CepService {

  constructor(private http: HttpClient) { }

  buscarDadosPorCEP(cep: string) : Observable<Endereco> {

      return this.http.get(`https://viacep.com.br/ws/${cep}/json`)
        .pipe(map((dados: Response) => this.converterRespostaParaEndereco(dados)));

  }

  private converterRespostaParaEndereco(dados): Endereco {
    return new Endereco(dados.cep, dados.logradouro, '', dados.bairro, dados.localidade, dados.uf);
  }

}
