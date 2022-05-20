import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'faceCards'
})
export class FaceCardsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
