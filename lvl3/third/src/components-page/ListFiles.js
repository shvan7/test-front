import React from 'react'
// components
import TableList from '../components/TableList'
import ReportUpload from '../components/ReportUpload'

const ListFiles = ({ store }) =>
  <div style={{ paddingTop: '4em', display: 'flex' }}>
    <TableList store={store} />
    <ReportUpload store={store} />
  </div>


export default ListFiles