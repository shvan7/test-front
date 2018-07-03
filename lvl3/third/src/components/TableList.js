import React from 'react'

const TableList = ({ store }) =>
  <div style={{ margin: '0 1em' }} className="table-files">
    <table>
      <thead>
        <tr>
          <th>num</th>
          <th>id</th>
          <th>Fichier</th>
          <th>Download</th>
        </tr>
      </thead>
      <tbody>
        {store.api.entry && store.api.entry.map((e, i) => {
          return (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{e.resource.id}</td>
              <td>{e.resource.contentType ? e.resource.contentType.split('/')[1].split('.')[0] : 'NOTHING'}</td>
              <td>
                <a
                  href={`https://fhirtest.uhn.ca/baseDstu3/Binary/${e.resource.id}`}
                  style={{fontSize: '1.5em', margin:0}}
                >
                  {'\u2B07'}
                </a>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  </div>

export default TableList
