export class Endereco {

  constructor(CEP: string, logradouro: string, numero: string, bairro: string, cidade: string, UF: string) {

      this.CEP = CEP;
      this.Logradouro = logradouro;
      this.Bairro = bairro;
      this.Cidade = cidade;
      this.Numero = numero;
      this.UF = UF;

  }

  CEP: string;
  Logradouro: string;
  Numero: string;
  Bairro: string;
  Cidade: string;
  UF: string;
}
