import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import actions from './actions';
import { getUsers, getOneuser, pageChange } from '../../api/users';

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
export function* getoneuser() {
  yield takeEvery('GET_ONEUSER', function*(data) {
    const result = yield call(getOneuser, data.email);
    if (result) {
      yield put({
        type: actions.GET_ONESUCCESS,
        oneuser: result
      })
    } else {
      yield put({type: actions.USERS_ERROR});
    }
  });
}
export function * pagechange() {
  yield takeEvery('PAGE_CHANGE', function*( data ) {
    const result = yield call(pageChange, data.uid, data.oper);
    if (result) {
      yield put({
        type: actions.GET_SUCCESS,
        data: result
      })
    } else {
      yield put({type: actions.USERS_ERROR});
    }
  })
}

export default function* rootSaga() {
  yield all([
    fork(getusers),
    fork(getoneuser),
    fork(pagechange)
  ]);
}
