import axios from "axios";
import {Tweet, TweetsState} from "../../store/ducks/tweets/contracts/state";

export function fetchTweetsApi(): Promise<TweetsState['items']> {
  return axios.get('/tweets').then(({data}) => data)
}

export function fetchTweetData(id: string): Promise<Tweet[]> {
  return axios.get('/tweets?_id=' + id).then(({data}) => data)
}

export function addTweetApi(payload: Tweet): Promise<Tweet> {
  return axios.post('/tweets', payload).then(({data}) => data)
}
