export default function (defaultState, handlers) {
  return function (state = defaultState, action) {
    if(handlers[action.type]){
      return handlers[action.type](state, action)
    }

    return state;
  }
}