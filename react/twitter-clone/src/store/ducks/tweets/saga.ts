import { takeEvery } from 'redux-saga/effects'
import {TweetsActionsType} from "./actionCreators";

export function* fetchTweetsRequest() {
  console.log('word')
}

export function* watchIncrementAsync() {
  yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
}