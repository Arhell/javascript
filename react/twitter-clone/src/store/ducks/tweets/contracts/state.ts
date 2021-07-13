export enum LoadingState {
  LOADED = 'LOADED',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEWER = 'NEWER'
}

export interface Tweet {
  _id: String
  text: String
  user: {
    fullName: String
    userName: String
    avatarUrl: String
  }
}

export interface TweetsState {
  items: Tweet[],
  loadingState: LoadingState
}