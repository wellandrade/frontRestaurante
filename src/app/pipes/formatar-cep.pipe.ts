import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatarCEP'
})
export class FormatarCEPPipe implements PipeTransform {

  transform(cep: string): string {

    if(cep.length == 6 && cep[5] !== '-') {

      let novoFormatado = cep.substr(0, 5);
      novoFormatado += '-' + cep[5];
      return novoFormatado;

    }

    return cep;
  }

}
