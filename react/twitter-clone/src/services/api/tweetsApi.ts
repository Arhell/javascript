import axios from "axios";
import {TweetsState} from "../../store/ducks/tweets/contracts/state";

export function fetchTweetsApi(): Promise<TweetsState['items']> {
  return axios.get('/tweets').then(({data}) => data)
}
