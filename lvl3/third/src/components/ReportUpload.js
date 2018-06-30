import React from 'react'

const hoursFormat = (dateMs) => {
  const hour = new Date(dateMs).toTimeString()
    .split(' ')[0]
    .replace(':', 'h')
    .split(':')[0]
  return hour
}

const ReportUpload = ({ store }) =>
  <div style={{marginRight: '1em'}} className="table-files">
    <table>
      <thead>
        <tr>
          <th>Time</th>
          <th>Name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {store.obj.map((e, i) =>
          <tr key={`${i}line-table-return`}>
            <td>{hoursFormat(e.date)}</td>
            <td>{e.name}</td>
            <td style={{ color: e.status ? '#32CD32' : '#FF4500' }}>
              {e.status ? '\u2714' : 'error'}
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>

export default ReportUpload