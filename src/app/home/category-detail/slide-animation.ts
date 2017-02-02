import { animate, AnimationEntryMetadata, state, style, transition,
    trigger } from '@angular/core';

export const slideRouteAnimation: AnimationEntryMetadata =
  trigger('routeAnimation', [
    state('*',
      style({
        opacity: 1,
        transform: 'translateX(0)'
      })
    ),
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(100%)'
      }),
      animate('0.2s ease-in')
    ])
  ]);
