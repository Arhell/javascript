import {call, put, takeLatest} from 'redux-saga/effects'
import {
  addTweet,
  setTweets,
  setTweetsLoadingState,
} from "./actionCreators";
import {addTweetApi, fetchTweetsApi} from "../../../services/api/tweetsApi";
import {LoadingState} from "./contracts/state";
import {Tweet} from "./contracts/state";
import {FetchAddTweetActionInterface, TweetsActionsType} from "./contracts/actionTypes";

export function* fetchTweetRequest(): Generator<unknown, void, Tweet[]> {
  try {
    const items: Tweet[] = yield call(fetchTweetsApi);
    yield put(setTweets(items))
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

export function* fetchAddTweetRequest({payload}: FetchAddTweetActionInterface): Generator<unknown, void, Tweet[]> {
  try {
    const data: Tweet = {
      _id: Math.random().toString(36).substr(2),
      text: payload,
      user: {
        fullName: "Test user",
        userName: 'test',
        avatarUrl: 'https://source.unsplash.com/random/100x100?3'
      }
    }
    const item = yield call(addTweetApi, data);
    // @ts-ignore
    yield put(addTweet(item))
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetRequest)
  yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest)
}