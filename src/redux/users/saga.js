import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import actions from './actions';
import { getUsers } from '../../api/users';

export function* getusers() {
  yield takeEvery('GET_USERS', function*() {
    const result = yield call(getUsers);
    if (result) {
      yield put({
        type: actions.GET_SUCCESS,
        data: result,
      });
    } else {
      yield put({ type: actions.USERS_ERROR });
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(getusers),
  ]);
}
