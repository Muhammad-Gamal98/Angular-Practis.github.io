import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any {
    var arr: Array<string | number> = [];
    for (let i of args) {
      for (let y of value) {
        if (i == y)
          arr.push(i)
      
      }
    }
    console.log(arr);
    return arr;

  }
}
