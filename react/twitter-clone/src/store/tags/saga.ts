import {call, put, takeLatest} from 'redux-saga/effects'
import {setTags, setTagsLoadingState, TagsActionsType} from "./actionCreators";
import {fetchTagsApi} from "../../services/api/tagsApi";
import {LoadingState} from "./contracts/state";
import {Tag} from "./contracts/state";

export function* fetchTweetRequest(): Generator<unknown, void, Tag[]> {
  try {
    const items: Tag[] = yield call(fetchTagsApi);
    yield put(setTags(items))
  } catch (error) {
    yield put(setTagsLoadingState(LoadingState.ERROR));
  }
}

export function* tagsSaga() {
  yield takeLatest(TagsActionsType.FETCH_TAGS, fetchTweetRequest)
}