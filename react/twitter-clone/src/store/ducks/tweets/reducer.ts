import produce from 'immer'
import {LoadingState, TweetsState} from "./contracts/state";

const initialTweetsState: TweetsState = {
  items: [],
  loadingState: LoadingState.NEWER
}

export const tweetsReducer = produce((draft: Draft<TweetsState>, action: any) => {

}, initialTweetsState)