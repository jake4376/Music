import { Map } from 'immutable';
import { getUsers } from '../../helpers/utility';
import actions from './actions';

const initState = new Map({
  status: false,
  frame: []
});

export default function authReducer(
  state = initState.merge(getUsers()),
  action
) {
  switch (action.type) {
    case actions.SET_SUCCESS:
      return state.set('status', true)
    case actions.SET_ERROR:
      return state.set('status', false)
    case actions.GET_FRAMESUCCESS:
      return state.set('frame', action.frame)
    default:
      return state;
  }
}