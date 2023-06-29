import { createReducer, on } from '@ngrx/store';
import { AuthActions } from '../actions/auth.actions';
import { AuthUser } from 'src/app/features/auth/auth.service';
import { storage } from 'src/app/utils/storage';

export const authFeatureKey = 'authState';

export interface State {
  authUser: AuthUser,
  //counter: number
}

export const initialState = {
  authUser: storage.getItem('auth_user'),
  // counter: 0
};

export const reducer = createReducer(
  initialState,
  on(AuthActions.getAuthUser, state => ({ ...state })),
  on(AuthActions.setAuthUser, (state, { authCurrentUser }) => ({ ...state, authUser: authCurrentUser })),
  // on(AuthCounterActions.getCount, state => ({ ...state })),
  // on(AuthCounterActions.incrementCount, state => ({ ...state, counter: state.counter + 1 })),
  // on(AuthCounterActions.decrementCount, state => ({ ...state, counter: state.counter - 1 })),
);
