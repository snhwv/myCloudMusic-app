import { trigger,  state, style, transition, animate } from '@angular/animations';


export const rotate = trigger('rotate', [
    state('inactive', style({
       transform: 'rotate(90deg)'
    })),
    state('active',   style({
        transform: 'rotate(0deg)'
    })),
    transition('inactive => active', animate('100ms ease-in')),
    transition('active => inactive', animate('100ms ease-out'))
]);
