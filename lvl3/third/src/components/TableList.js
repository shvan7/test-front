import React from 'react'

const TableList = ({ store }) =>
  <div className="table-files">
    <table>
      <thead>
        <tr>
          <th>num</th>
          <th>id</th>
          <th>Fichier</th>
        </tr>
      </thead>
      <tbody>
        {store.api.entry && store.api.entry.map((e, i) => {
          return (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{e.resource.id}</td>
              <td>{e.resource.contentType}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  </div>

export default TableList
