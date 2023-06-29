import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { AuthUser } from 'src/app/features/auth/auth.service';

export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    'Get Auth User': emptyProps(),
    'Set Auth User': props<{ authCurrentUser: AuthUser; }>()
  }
});

// export const AuthCounterActions = createActionGroup({
//   source: 'Auth',
//   events: {
//     'Get Count': emptyProps(),
//     'Increment Count': emptyProps(),
//     'Decrement Count': emptyProps()
//   }
// });
