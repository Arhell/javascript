import {call, put, takeLatest} from 'redux-saga/effects'
import { setTweetData, setTweetLoadingState} from "./actionCreators";
import {LoadingState} from "./contracts/state";
import {fetchTweetData} from "../../../services/api/tweetsApi";
import {SetTweetDataActionInterface, TweetActionsType} from "./contracts/actionTypes";

export function* fetchTweetRequest({payload: tweetId}: SetTweetDataActionInterface) {
  try {
    // @ts-ignore
    const data = yield call(fetchTweetData, tweetId);
    yield put(setTweetData(data))
  } catch (error) {
    yield put(setTweetLoadingState(LoadingState.ERROR));
  }
}

export function* TweetDataSaga() {
  yield takeLatest(TweetActionsType.FETCH_TWEET_DATA, fetchTweetRequest)
}