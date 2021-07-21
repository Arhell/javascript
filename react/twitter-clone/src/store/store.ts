import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./rootReducer";
import createSagaMiddleware from "redux-saga"
import rootSaga from "./saga";
import {TweetsState} from "./ducks/tweets/contracts/state";
import {TagsState} from "./ducks/tags/contracts/state";
import {TweetDataState} from "./ducks/tweet/contracts/state";

export const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const sagaMiddleware = createSagaMiddleware()

export interface RootState {
  tweets: TweetsState,
  tags: TagsState,
  tweet: TweetDataState
}

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)