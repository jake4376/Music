import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { clearToken } from '../../helpers/utility';
import actions from './actions';
import { auth_talken } from '../../api/auth';

export function* loginRequest() {
  yield takeEvery('LOGIN_REQUEST', function*(data) {
    const email = data.data.email;
    const pw = data.data.pw;
    const result = yield call(auth_talken, email, pw);
    if (result) {
      yield put({
        type: actions.LOGIN_SUCCESS,
        token: result,
      });
    } else {
      yield put({ type: actions.LOGIN_ERROR });
    }
  });
}

export function* loginSuccess() {
  yield takeEvery(actions.LOGIN_SUCCESS, function*(payload) {
    yield localStorage.setItem('id_token', payload.token);
  });
}

export function* loginError() {
  yield takeEvery(actions.LOGIN_ERROR, function*() {});
}

export function* logout() {
  yield takeEvery(actions.LOGOUT, function*() {
    clearToken();
    yield put(push('/'));
  });
}
export default function* rootSaga() {
  yield all([
    fork(loginRequest),
    fork(loginSuccess),
    fork(loginError),
    fork(logout)
  ]);
}
