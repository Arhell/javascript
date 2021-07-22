import {LoadingState,} from "./contracts/state";
import {Tweet} from "../tweets/contracts/state";
import {
  FetchTweetDataActionInterface,
  SetTweetDataActionInterface, SetTweetDataLoadingStateActionInterface,
  TweetActionsType
} from "./contracts/actionTypes";

export const setTweetData = (payload: Tweet): SetTweetDataActionInterface => ({
  type: TweetActionsType.SET_TWEET_DATA,
  payload,
})

export const setTweetLoadingState = (payload: LoadingState): SetTweetDataLoadingStateActionInterface => ({
  type: TweetActionsType.SET_LOADING_STATE,
  payload,
})

export const fetchTweetData = (payload: string): FetchTweetDataActionInterface => ({
  type: TweetActionsType.FETCH_TWEET_DATA,
  // @ts-ignore
  payload
})

export type TweetActions = SetTweetDataActionInterface | FetchTweetDataActionInterface | SetTweetDataLoadingStateActionInterface;
