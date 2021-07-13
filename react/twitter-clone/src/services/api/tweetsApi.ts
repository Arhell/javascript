import axios from "axios";
import {TweetsState} from "../../store/ducks/tweets/contracts/state";

export function fetchTweetsApi(): Promise<TweetsState['items']> {
  return axios.get('https://trycode.pw/c/2OBQ1.json').then(({data}) => data)
}
