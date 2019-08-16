import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import actions from './actions';
import { setdata, getdata, update, ondelete } from '../../api/frame';

export function * setData() {
  yield takeEvery('SET_DATA', function*(data) {
    const result = yield call(setdata, data.data)
    if (result) {
      yield put({
        type: actions.SET_SUCCESS
      })
    }
  })
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

export function* upDate() {
  yield takeEvery('UPDATE', function*(data) {
    const result = yield call(update, data.data)
    if (result) {
      yield put({
        type: actions.SET_SUCCESS
      })
    }
  })
}
export function* onDelete() {
  yield takeEvery("DELETE", function*(data) {
    const result = yield call(ondelete, data.id)
    if (result) {
      yield put({
        type: actions.SET_SUCCESS
      })
    } else {
      console.log("this is the error on the delete")
    }
  })
}
export default function* rootSaga() {
  yield all([
    fork(setData),
    fork(getData),
    fork(upDate),
    fork(onDelete)
  ]);
}