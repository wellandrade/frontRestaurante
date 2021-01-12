import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatarTipoCozinha'
})
export class FormatarTipoCozinhaPipe implements PipeTransform {

  transform(tipoCozinha: number): string {

    let descricaoTipoCozinha = '';

    switch (tipoCozinha) {
      case 1:
          descricaoTipoCozinha = 'Brasileira';
          break;
      case 2:
          descricaoTipoCozinha = 'Italiana';
          break;
      case 3:
          descricaoTipoCozinha = 'Arabe';
          break;
      case 4:
          descricaoTipoCozinha = 'Japonesa';
          break;
      case 5:
          descricaoTipoCozinha = 'FastFood';
          break;
      default:
        break;
    }

    return descricaoTipoCozinha;
  }

}
