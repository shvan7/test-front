import React from 'react'
import { store, actions } from '../reduce/reducer'
// css
import './SendFiles.css'

const getElemt = (res, i) => {
  actions.delList()
  if (res.ok) actions.getApi()
}

const createObjStatus = (e, res) => {
  const obj = {
    status: res.ok,
    name: e.name,
    date: Date.now()
  }
  actions.itemUpload(obj)
}

const submitFiles = () => {
  store.getState().fileList.forEach((e, i) => {
    fetch('https://fhirtest.uhn.ca/baseDstu3/Binary', { method: 'POST', body: e })
      .then(res => {
        getElemt(res, i)
        createObjStatus(e, res)
      })
      .catch(e => console.log('Error', e))
  })
}

const SendFiles = () =>
  <button onClick={submitFiles} className="btn-send-files" type="button" >Upload</button>

export default SendFiles