import {createStore} from "redux";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


function reducer(state = 0, action: any):void {
  console.log(state, action)
}
// @ts-ignore
export const store = createStore(reducer)
