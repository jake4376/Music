import { Map } from 'immutable';
import { getUsers } from '../../helpers/utility';
import actions from './actions';

const initState = new Map({
  users: [],
  oneuser: []
});

export default function authReducer(
  state = initState.merge(getUsers()),
  action
) {
  switch (action.type) {
    case actions.GET_SUCCESS:
      return state.set('users', action.data);
    case actions.GET_ONESUCCESS:
      return state.set('oneuser', action.oneuser);
    default:
      return state;
  }
}