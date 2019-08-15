import { all } from 'redux-saga/effects'
import authSagas from './auth/saga'
import cardsSagas from './card/saga'
import usersSagas from './users/saga'
import framesSagas from './frameworks/saga'


export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    cardsSagas(),
    usersSagas(),
    framesSagas()
  ]);
}
