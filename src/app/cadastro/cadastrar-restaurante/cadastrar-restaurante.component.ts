import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CepService } from 'src/app/servicos/cep.service';
import { NotificacaoService } from 'src/app/servicos/notificacoes/notificacao.service';
import { RestauranteService } from 'src/app/servicos/restaurante.service';
import { Endereco } from 'src/app/shared/Endereco';
import { RestauranteInput } from 'src/app/shared/RestauranteInput';

@Component({
  selector: 'app-cadastrar-restaurante',
  templateUrl: './cadastrar-restaurante.component.html',
  styleUrls: ['./cadastrar-restaurante.component.css']
})
export class CadastrarRestauranteComponent implements OnInit {

  formRestaurante: FormGroup;
  mostrarBarraProgresso: boolean = false;

  constructor(private fb: FormBuilder,
              private cep: CepService,
              private restauranteServico: RestauranteService,
              private notificacaoService: NotificacaoService,
              private router: Router) { }

  ngOnInit(): void {
    this.criarFormulario();
  }

  criarFormulario(): void {

    this.formRestaurante = this.fb.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
      tipoCozinha: ['', Validators.required],
      CEP: ['', Validators.required],
      logradouro: ['', Validators.required],
      numero: ['', Validators.required],
      cidade: ['', Validators.required],
      UF: ['', Validators.required],
      bairro: ['', Validators.required],
    });
  }

   buscarEnderecoPorCEP() {
    this.ExibirBarraProgresso();

    let cep = this.formRestaurante.controls['CEP'].value;

    this.cep.buscarDadosPorCEP(cep).subscribe(dados => {
      this.popularDadosEndereco(dados);
      this.OcultarBarraProgresso();
    }, error => {
      this.notificacaoService.MensagemErroServicoExterno('Digite o endereço manualmente, não foi possível localizar o mesmo pelo CEP');
      this.habilitarCampos();
      this.OcultarBarraProgresso();
    });

  }

  popularDadosEndereco(dadosEndereco: Endereco) {
    this.formRestaurante.patchValue({
      logradouro: dadosEndereco.Logradouro,
      numero: dadosEndereco.Numero,
      UF: dadosEndereco.UF,
      cidade: dadosEndereco.Cidade,
      bairro: dadosEndereco.Bairro
    });

    this.desabilitarCampos();
  }

  private desabilitarCampos(): void {
    this.formRestaurante.controls['logradouro'].disable();
    this.formRestaurante.controls['UF'].disable();
    this.formRestaurante.controls['cidade'].disable();
    this.formRestaurante.controls['bairro'].disable();
  }

  private habilitarCampos(): void {
    this.formRestaurante.controls['logradouro'].enable();
    this.formRestaurante.controls['UF'].enable();
    this.formRestaurante.controls['cidade'].enable();
    this.formRestaurante.controls['bairro'].enable();
  }

  get nomeRestaurante() {
    return this.formRestaurante.get('nome');
  }

  get tipoCozinha() {
    return this.formRestaurante.get('tipoCozinha')
  }

  cadastrar(): void {

    this.router.navigate(['/listar-restaurante']);

    // this.ExibirBarraProgresso();
    // this.formRestaurante.disable();

    // let dadosRestaurante = new RestauranteInput();

    // dadosRestaurante.nome = this.formRestaurante.controls['nome'].value;
    // dadosRestaurante.cozinha = this.formRestaurante.controls['tipoCozinha'].value;
    // dadosRestaurante.cep = this.formRestaurante.controls['CEP'].value;
    // dadosRestaurante.logradouro = this.formRestaurante.controls['logradouro'].value;
    // dadosRestaurante.numero = this.formRestaurante.controls['numero'].value;
    // dadosRestaurante.uf = this.formRestaurante.controls['UF'].value;
    // dadosRestaurante.cidade = this.formRestaurante.controls['cidade'].value;

    // this.restauranteServico.cadastrar(dadosRestaurante).subscribe(dados => {
    //   this.notificacaoService.MensagemSucesso(dados);
    //   this.OcultarBarraProgresso();
    //   this.HabilitarFormulario();
    // }, (error: HttpErrorResponse) => {
    //   this.notificacaoService.MensagemErro(error);
    //   this.OcultarBarraProgresso();
    //   this.HabilitarFormulario();
    // });
  }

  private OcultarBarraProgresso(): void {
    this.mostrarBarraProgresso = false;
  }

  private ExibirBarraProgresso(): void {
    this.mostrarBarraProgresso = true;
  }

  private HabilitarFormulario(): void {
    this.formRestaurante.enable();    
  }
}
