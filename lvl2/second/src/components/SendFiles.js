import React from 'react'
import { store } from '../reduce/reducer'
// css
import './SendFiles.css'

const getElemt = (e, res) => {
  const elemt = document.getElementById(e)
  elemt.innerHTML = res.ok ? '\u2714' : 'error'
  elemt.style.color = res.ok ? '#32CD32' : '#FF4500'
  elemt.style.fontSize = '20px'
}

const submitFiles = () => {
  store.getState().fileList.forEach((e, i) => {
    fetch('https://fhirtest.uhn.ca/baseDstu3/Binary', { method: 'POST', body: e })
      .then(res => {
        console.log('Status', res)
        getElemt(`table-files-status-${i}`, res)
      })
      .catch(e => console.log('Error', e))
  })
  
  console.log(store.getState().fileList)
}

const SendFiles = () =>
  <button onClick={submitFiles} className="btn-send-files" type="button" >Upload</button>

export default SendFiles