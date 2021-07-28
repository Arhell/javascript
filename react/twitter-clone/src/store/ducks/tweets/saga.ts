import {call, put, takeLatest} from 'redux-saga/effects'
import {setTweets, setTweetsLoadingState, TweetsActionsType} from "./actionCreators";
import {fetchTweetsApi} from "../../../services/api/tweetsApi";
import {LoadingState} from "./contracts/state";
import {Tweet} from "./contracts/state";

export function* fetchTweetRequest(): Generator<unknown, void, Tweet[]> {
  try {
    const items: Tweet[] = yield call(fetchTweetsApi);
    yield put(setTweets(items))
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

export function* addTweetRequest(): Generator<unknown, void, Tweet[]> {
  try {
    const items: Tweet[] = yield call(fetchTweetsApi);
    yield put(setTweets(items))
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetRequest)
}