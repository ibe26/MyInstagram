import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Like'
})
export class LikePipe implements PipeTransform {

  transform(value: string|null): any {

    if (value===null) {
      return "No Likes";
    }
    else if (+value === 1) {
      return "1 Like";
    }
    return `${+value} Likes`;
  }

}
