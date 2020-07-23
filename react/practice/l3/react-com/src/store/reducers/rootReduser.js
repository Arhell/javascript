import {combinereducers} from 'redux'
import quizReducer from "./quiz";
import createReducer from "./create";

export default combinereducers({
  quiz: quizReducer,
  create: createReducer()
})