import React from 'react'
import { actions } from '../reduce/reducer'
import './Tablefiles.css'

const Tablefiles = ({ store }) =>
  <div className="table-files">
    <table>
      <thead>
        <tr>
          <th>Action</th>
          <th>Name</th>
          <th>Type</th>
          <th>Size</th>
        </tr>
      </thead>
      <tbody>
        {store.fileList.map((e, i) =>
          <tr key={`${i}line-table`}>
            <td><button onClick={() => actions.removeFile(i)}>Remove</button></td>
            <td>{e.name}</td>
            <td>{e.type}</td>
            <td>{Math.round(e.size/1000)/100} mb</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>

export default Tablefiles
