import {combineReducers} from 'redux'

import Counter from "./reducers/counter1"
import Counter2 from "./reducers/counter2"

export default combineReducers({
  counter1, counter2
})