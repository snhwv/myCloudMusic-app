import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "musicTime"
})
export class MusicTimePipe implements PipeTransform {
  transform(value: number, args?: any): any {
    const Minute = Math.floor(value / 60);
    const Second = Math.floor(value % 60);
    const MinuteS = Minute >= 10 ? Minute : "0" + Minute;
    const SecondS = Second >= 10 ? Second : "0" + Second;
    return MinuteS + ":" + SecondS;
  }
}
