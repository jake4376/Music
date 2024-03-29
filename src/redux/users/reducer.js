import { Map } from 'immutable';
import { getUsers } from '../../helpers/utility';
import actions from './actions';

const initState = new Map({
  users: [],
  oneuser: [],
  practise: [],
  changePractise: false,
  error: false
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
    case actions.GET_PRACTISESUCCESS:
      return state.set('practise', action.practise);
    case actions.REQUEST:
      return state.set('practise', [])
    case actions.USERS_ERROR:
      return state.set('error', true)
    case actions.PRESUCCESS:
      return state.set('error', false)
    default:
      return state;
  }
}