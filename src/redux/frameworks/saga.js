import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import actions from './actions';
import { setdata, getdata, getonedata } from '../../api/frame';

export function * setData() {
  yield takeEvery('SET_DATA', function*(data) {
    const result = yield call(setdata, data.data)
    if (result) {
      yield put({
        type: actions.SET_SUCCESS
      })
    }
  });
}
export function * getData() {
  yield takeEvery('GET_DATA', function*() {
    const result = yield call(getdata)
    if (result) {
      yield put({
        type: actions.GET_FRAMESUCCESS,
        frame: result
      })
    }
  })
}
export function* getOneData() {
  yield takeEvery('GET_ONEDATA', function*(data) {
    const result = yield call(getonedata, data.data)
    console.log(result)
  })
}
export default function* rootSaga() {
  yield all([
    fork(setData),
    fork(getData)
  ]);
}