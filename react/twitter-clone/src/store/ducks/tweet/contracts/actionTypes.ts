import {Action} from "redux";
import {Tweet} from "../../tweets/contracts/state";
import {LoadingState} from "./state";

export enum TweetActionsType {
  SET_TWEET_DATA = 'tweet/SET_TWEET_DATA',
  FETCH_TWEET_DATA = 'tweet/FETCH_TWEET_DATA',
  SET_LOADING_STATE = 'tweet/SET_LOADING_STATE',
}

export interface SetTweetDataActionInterface extends Action<TweetActionsType>{
  type: TweetActionsType.SET_TWEET_DATA
  payload: Tweet
}

export interface SetTweetDataLoadingStateActionInterface extends Action<TweetActionsType>{
  type: TweetActionsType.SET_LOADING_STATE
  payload: LoadingState
}

export interface FetchTweetActionInterface extends Action<TweetActionsType>{
  type: TweetActionsType.FETCH_TWEET_DATA
  payload: string
}