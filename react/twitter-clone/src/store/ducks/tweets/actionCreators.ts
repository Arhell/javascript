import {TweetsState} from "./contracts/state";
import {Action} from "redux";

export enum TweetsActionsType {
  SET_TWEETS = 'tweets/SET_TWEETS',
}

export interface SetTweetsActionInterface extends Action<TweetsActionsType>{
  type: TweetsActionsType.SET_TWEETS
  payload: TweetsState['items']
}

export const setTweets = (payload: TweetsState['items']): SetTweetsActionInterface => ({
  type: TweetsActionsType.SET_TWEETS,
  payload,
})

export type TweetsActions = SetTweetsActionInterface;
