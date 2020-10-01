import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
import {User} from '../../model/user.model';

export const userFeatureKey = 'user';

export interface UserState {
  user: User | null;
  isAuthenticated: boolean;
  errorMessage: string | null;
}

export const initialState: UserState = {
  user: null,
  isAuthenticated: false,
  errorMessage: null
};


export const reducer = createReducer(
  initialState,

  on(UserActions.loadUsers, state => state),
  on(UserActions.loadUsersSuccess, (state, action) => state),
  on(UserActions.loadUsersFailure, (state, action) => state),

);

