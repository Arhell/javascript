// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case 'JOINED':
      return {
        ...state,
        joined: true,
        userName: action.payload.userName,
        roomId: action.payload.roomId,
      }

    case 'SET_USERS':
      return {
        ...state,
        users: action.payload
      }

    case 'SET_MESSAGES':
      return {
        ...state,
        messages: action.payload
      }

    default:
      return state
  }
}