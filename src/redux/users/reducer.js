import { Map } from 'immutable';
import { getUsers } from '../../helpers/utility';
import actions from './actions';

const initState = new Map({
  users: []
});

export default function authReducer(
  state = initState.merge(getUsers()),
  action
) {
  switch (action.type) {
    case actions.GET_SUCCESS:
      return state.set('users', action.data);
    default:
      return state;
  }
}