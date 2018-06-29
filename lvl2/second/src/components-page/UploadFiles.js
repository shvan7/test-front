import React from 'react'
// components
import Formfiles from '../components/Formfiles'
import Tablefiles from '../components/Tablefiles'

const UploadFiles = ({store}) =>
    <div style={{ marginTop: '4em' }}>
      <Formfiles />
      <Tablefiles store={store} />
    </div>

export default UploadFiles
