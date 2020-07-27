import {combinereducers} from 'redux'
import quizReducer from "./quiz";
import createReducer from "./create";
import authReducer from "./auth";

export default combinereducers({
  quiz: quizReducer,
  create: createReducer,
  auth: authReducer
})