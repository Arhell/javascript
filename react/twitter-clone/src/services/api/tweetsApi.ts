import axios from "axios";
import {Tweet, TweetsState} from "../../store/ducks/tweets/contracts/state";

export function fetchTweetsApi(): Promise<TweetsState['items']> {
  return axios.get('/tweets').then(({data}) => data)
}

export function fetchTweetData(id: string): Promise<Tweet> {
  return axios.get('/tweet' + id).then(({data}) => data)
}
