import React from 'react'
// components
import TableList from '../components/TableList'

const ListFiles = ({ store }) =>
    <div style={{ marginTop: '4em' }}>
      <TableList store={store}/>
    </div>

export default ListFiles