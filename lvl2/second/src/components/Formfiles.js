import React from 'react'
import { actions } from '../reduce/reducer'
// components
import SendFiles from './SendFiles'
// css
import './Formfiles.css'

const addingState = (evt) => {
  const obj = evt.target.files
  console.log(obj)
  const list = Object.keys(obj).map(e => obj[e])
  actions.addList(list)
}

const Formfiles = () =>
    <div className="block-form-files">
      <form>
        <label className="label-form-files" htmlFor="input-add-files">Add files</label>
        <input
          onChange={addingState}
          id="input-add-files"
          className="input-form-files"
          type="file"
          multiple
        />
      </form>
      <div>
        <SendFiles />
      </div>
    </div>

export default Formfiles