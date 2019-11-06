import { put, takeEvery } from 'redux-saga/effects'

export function* incrementAsync() {
console.log("saga1");
  // yield put({ type: 'INCREMENTCOUNTER' })
}

export function* sagas() {
  console.log("saga");
  // yield takeEvery('INCREMENT', incrementAsync)
}
//
