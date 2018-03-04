import { trigger, style, transition, animate } from '@angular/animations';

export const topToBottom = trigger('topToBottom', [
  transition("void => *", [
    style({ opacity: 0 }),
    animate(600, style({ opacity: 1 }))
  ]),
  transition("* => void", [
    animate(600, style({ opacity: 0 }))
  ])
]);
