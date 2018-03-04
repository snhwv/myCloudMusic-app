import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "numTurner"
})
export class NumTurnerPipe implements PipeTransform {
  transform(value: number, args?: any): any {
    let newValue;
    if (value > 9999) {
      newValue = Math.floor(value / 10000) + "万";
    } else {
      newValue = value;
    }
    return newValue;
  }
}
