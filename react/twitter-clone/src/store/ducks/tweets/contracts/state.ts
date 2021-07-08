export enum LoadingState {
  LOADED = 'LOADED',
  ERROR = 'ERROR',
  NEWER = 'NEWER'
}

export interface Tweet {
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