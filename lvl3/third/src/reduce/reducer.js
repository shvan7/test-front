import { createStore } from 'redux'

const initialState = {
  fileList: [],
  api: [],
  obj: []
}

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case 'GET_API':
      return { ...state, api: actions.api }
    case 'DEL_LIST':
      return { ...state, fileList: [] }
    case 'ITEM_UPLOAD':
      return { ...state, obj: [ actions.obj, ...state.obj ] }
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
  getApi: () => {
    fetch('https://fhirtest.uhn.ca/baseDstu3/Binary')
      .then(res => res.json())
      .then(data => store.dispatch({ type: 'GET_API', api: data }))
  },
  addList: (list) => store.dispatch({ type: 'ADD_LIST', fileList: list }),
  removeFile: (id) => store.dispatch({ type: 'REMOVE_FILE', index: id }),
  itemUpload: (obj) => store.dispatch({ type: 'ITEM_UPLOAD', obj: obj }),
  delList: () => store.dispatch({ type: 'DEL_LIST' })
}

export const store = createStore(reducer)