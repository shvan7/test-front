import React from 'react'
// components
import Formfiles from '../components/Formfiles'
import Tablefiles from '../components/Tablefiles'
import ReportUpload from '../components/ReportUpload'

const UploadFiles = ({store}) =>
  <div style={{ paddingTop: '4em' }}>
    <Formfiles store={store} />
    <div style={{ display: 'flex' }}>
      <Tablefiles store={store} />
      <ReportUpload store={store} />
    </div>
  </div>

export default UploadFiles
