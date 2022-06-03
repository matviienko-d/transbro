import { animate, AnimationTriggerMetadata, keyframes, state, style, transition, trigger } from "@angular/animations";

export const slideDown: AnimationTriggerMetadata = trigger('slidingDropdown', [
  state('show', style({ transform: 'translate(0, 42px) rotateX(0deg)', opacity: 1})),
  state('hide', style({ opacity: 0 })),
  transition(
    '* => show',
    animate(
      '300ms',
      keyframes([
        style({ transform: 'translate(0, 42px) rotateX(-90deg)', opacity: 0, offset: 0 }),
        style({ transform: 'translate(0, 42px) rotateX(-20deg)', offset: 0.5 }),
        style({ transform: 'translate(0, 42px) rotateX(0deg)', opacity: 1, offset: 1.0 }),
      ])
    )
  ),
])
