import produce, {Draft} from 'immer'
import {LoadingState, TweetDataState} from "./contracts/state";
import {TweetActions} from "./actionCreators";
import {TweetActionsType} from "./contracts/actionTypes"

const initialTweetState: TweetDataState = {
  data: undefined,
  loadingState: LoadingState.NEWER
}

export const tweetReducer = produce((draft: Draft<TweetDataState>, action: TweetActions) => {

  switch (action.type) {
    case TweetActionsType.SET_TWEET_DATA:
      draft.data = action.payload
      draft.loadingState = LoadingState.LOADED
      break

    case  TweetActionsType.FETCH_TWEET_DATA:
      draft.data = undefined
      draft.loadingState = LoadingState.LOADING
      break

    case  TweetActionsType.SET_LOADING_STATE:
      draft.loadingState = action.payload
      break

    default:
      break
  }

}, initialTweetState)