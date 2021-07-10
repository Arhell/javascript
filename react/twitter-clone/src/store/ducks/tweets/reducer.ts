import produce, {Draft} from 'immer'
import {LoadingState, TweetsState} from "./contracts/state";
import {TweetsActions, TweetsActionsType} from "./actionCreators";

const initialTweetsState: TweetsState = {
  items: [],
  loadingState: LoadingState.NEWER
}

export const tweetsReducer = produce((draft: Draft<TweetsState>, action: TweetsActions) => {
  const {type, payload} = action

  if (type === TweetsActionsType.SET_TWEETS) {
    draft.items = payload
  }
}, initialTweetsState)