import {LoadingState, TagsState} from "./contracts/state";
import {Action} from "redux";

export enum TagsActionsType {
  SET_TAGS = 'tags/SET_TAGS',
  FETCH_TAGS = 'tags/FETCH_TAGS',
  SET_LOADING_STATE = 'tags/SET_LOADING_STATE',
}

export interface SetTagsActionInterface extends Action<TagsActionsType>{
  type: TagsActionsType.SET_TAGS
  payload: TagsState['items']
}

export interface SetTagsLoadingStateActionInterface extends Action<TagsActionsType>{
  type: TagsActionsType.SET_LOADING_STATE
  payload: LoadingState
}

export interface FetchTagsActionInterface extends Action<TagsActionsType>{
  type: TagsActionsType.FETCH_TAGS
}

export const setTags = (payload: TagsState['items']): SetTagsActionInterface => ({
  type: TagsActionsType.SET_TAGS,
  payload,
})

export const setTagsLoadingState = (payload: LoadingState): SetTagsLoadingStateActionInterface => ({
  type: TagsActionsType.SET_LOADING_STATE,
  payload,
})

export const fetchTags = (): FetchTagsActionInterface => ({
  type: TagsActionsType.FETCH_TAGS,
})

export type TagsActions = SetTagsActionInterface | FetchTagsActionInterface | SetTagsLoadingStateActionInterface;
