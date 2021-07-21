export enum LoadingState {
  LOADED = 'LOADED',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEWER = 'NEWER'
}

export interface Tag {
  _id: number
  name: String
  count: number
}

export interface TagsState {
  items: Tag[],
  loadingState: LoadingState
}