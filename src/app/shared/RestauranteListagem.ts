export class RestauranteListagem {

    constructor(id: string, nome: string, tipoCozinha: number, cidade: string){
        
        this.Id = id;
        this.Nome = nome;
        this.TipoCozinha = tipoCozinha;
        this.Cidade = cidade;
    }

    Id: string;
    Nome: string;
    TipoCozinha: number;
    Cidade: string;

}