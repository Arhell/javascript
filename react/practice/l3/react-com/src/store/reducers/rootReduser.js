import {combinereducers} from 'redux'
import quizReducer from "./quiz";

export default combinereducers({
  quiz: quizReducer
})