import React from 'react'
import { Link } from "@reach/router"
// css
import './Topbar.css'

const Topbar = () =>
  <div className="bar">
    <h1>Upload files</h1>
    <div>
      <Link to="/test-front"><button>List Files</button></Link>
      <Link to="/upload-page"><button>New File</button></Link>
    </div>
  </div>

export default Topbar
