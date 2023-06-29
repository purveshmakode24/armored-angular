import {
  // ActionReducer,
  ActionReducerMap,
  // createFeatureSelector,
  // createSelector,
  // MetaReducer
} from '@ngrx/store';
// import { environment } from '../../../environments/environment';
import * as fromAuth from './auth.reducer';

export interface AppState {
  [fromAuth.authFeatureKey]: fromAuth.State;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromAuth.authFeatureKey]: fromAuth.reducer
};


// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
