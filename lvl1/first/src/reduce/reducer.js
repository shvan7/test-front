import { createStore } from 'redux'

const initialState = {
  fileList: []
}

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case 'ADD_LIST':
      return { ...state, fileList: state.fileList.concat(actions.fileList) }
    case 'REMOVE_FILE':
      state.fileList.splice(actions.index, 1)
      return { ...state }
    default:
      return state
  }
}

export const actions = {
  addList: (list) => store.dispatch({ type: 'ADD_LIST', fileList: list }),
  removeFile: (id) => store.dispatch({ type: 'REMOVE_FILE', index: id })
}

export const store = createStore(reducer)