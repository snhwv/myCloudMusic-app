import { trigger,  state, style, transition, animate } from '@angular/animations';


export const toggleNav = trigger('toggleNav', [
    state('inactive', style({
       left: '-300px'
    })),
    state('active',   style({
       left: '0px'
    })),
    transition('inactive => active', animate('100ms ease-in')),
    transition('active => inactive', animate('100ms ease-out'))
]);
