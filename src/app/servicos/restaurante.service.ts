import { HttpClient, HttpErrorResponse, HttpHeaderResponse, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mensagem } from '../shared/Mensagem';
import { RestauranteInput } from '../shared/RestauranteInput';
import { RestauranteListagem } from '../shared/RestauranteListagem';

@Injectable({
  providedIn: 'root'
})

export class RestauranteService {

  private API = 'https://localhost:44365/api/';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  cadastrar(dadosRestaurante: RestauranteInput): Observable<Mensagem> {
    return this.http.post<Mensagem>(this.API + 'restaurante', JSON.stringify(dadosRestaurante), this.httpOptions);
  }

  listarTodosRestaurantes(): Observable<RestauranteListagem[]> {
    return this.http.get<RestauranteListagem[]>(this.API + 'restaurante/todos');
  }
}
