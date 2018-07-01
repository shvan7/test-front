import React, { Component } from 'react'
import { Router } from "@reach/router"
// store
import { actions, store } from './reduce/reducer'
// components
import Topbar from './components/Topbar'
import UploadFiles from './components-page/UploadFiles'
import ListFiles from './components-page/ListFiles'

class App extends Component {
  constructor() {
    super()
    this.state = store.getState()
    store.subscribe(() => {
      this.setState(store.getState())
    })
    actions.getApi()
  }

  render() {
    return (
      <React.Fragment>
        <Topbar />
        < Router >
          <ListFiles store={this.state} path="/test-front" />
          <UploadFiles store={this.state} path="/upload-page" />
        </Router >
      </React.Fragment>
    )
  }
}

export default App
