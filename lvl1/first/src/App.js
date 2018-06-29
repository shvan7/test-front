import React, { Component } from 'react'
// store
import { store } from './reduce/reducer'
// components
import Tablefiles from './components/Tablefiles'
import Topbar from './components/Topbar'
import Formfiles from './components/Formfiles'
// css
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = store.getState()

    store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  render() {
    return (
      <div className="App">
        <Topbar />
        <div style={{marginTop: '4em'}}>
          <Formfiles />
          <Tablefiles store={this.state}/>
        </div>
      </div>
    )
  }
}

export default App
