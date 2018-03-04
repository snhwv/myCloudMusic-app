import { trigger,  state, style, transition, animate } from '@angular/animations';


export const toggleMask = trigger('toggleMask', [
    state('inactive', style({
       display: 'none'
    })),
    state('active',   style({
       display: 'block'
    })),
    transition('inactive => active', animate('100ms ease-in')),
    transition('active => inactive', animate('100ms ease-out'))
]);
