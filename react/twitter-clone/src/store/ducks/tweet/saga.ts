import {call, put, takeLatest} from 'redux-saga/effects'
import { setTweetData, setTweetLoadingState} from "./actionCreators";
import {LoadingState} from "./contracts/state";
import {fetchTweetData} from "../../../services/api/tweetsApi";
import {FetchTweetDataActionInterface, TweetActionsType} from "./contracts/actionTypes";
import {Tweet} from "../tweets/contracts/state";

export function* fetchTweetRequest({payload: tweetId}: FetchTweetDataActionInterface) {
  try {
    // @ts-ignore
    const data: Tweet[] = yield call(fetchTweetData, tweetId);
    yield put(setTweetData(data[0]))
  } catch (error) {
    yield put(setTweetLoadingState(LoadingState.ERROR));
  }
}

export function* TweetDataSaga() {
  yield takeLatest(TweetActionsType.FETCH_TWEET_DATA, fetchTweetRequest)
}