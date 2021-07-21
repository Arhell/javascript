import {all} from "redux-saga/effects"
import {tweetsSaga} from "./ducks/tweets/saga";
import {tagsSaga} from "./ducks/tags/saga";
import {TweetDataSaga} from "./ducks/tweet/saga";

export default function* rootSaga() {
  yield all([
    tweetsSaga(),
    tagsSaga(),
    TweetDataSaga(),
  ])
}