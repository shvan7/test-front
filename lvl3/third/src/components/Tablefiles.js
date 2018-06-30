import React from 'react'
import { actions } from '../reduce/reducer'
// css
import './Tablefiles.css'

const Tablefiles = ({ store }) =>
  <div style={{ marginLeft: '1em' }} className="table-files">
    <table>
      <thead>
        <tr>
          <th>Action</th>
          <th>Name</th>
          <th>Type</th>
          <th>Size</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {store.fileList.map((e, i) =>
          <tr key={`${i}line-table`}>
            <td><button className="btn-form-remove" onClick={() => actions.removeFile(i)}>Remove</button></td>
            <td>{e.name}</td>
            <td>{e.name.split('.')[1]}</td>
            <td>{Math.round(e.size / 1000) / 100} mb</td>
            <td className="cell-status" id={`table-files-status-${i}`}>added</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>

export default Tablefiles
