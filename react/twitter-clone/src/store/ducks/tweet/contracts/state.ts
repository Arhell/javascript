import {Tweet} from "../../tweets/contracts/state";

export enum LoadingState {
  LOADED = 'LOADED',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEWER = 'NEWER'
}

export interface TweetDataState {
  data?: Tweet,
  loadingState: LoadingState
}