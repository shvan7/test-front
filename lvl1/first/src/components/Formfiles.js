import React from 'react'
import { actions } from '../reduce/reducer'
import './Formfiles.css'

const addingState = (evt) => {
  const obj = evt.target.files
  const list = Object.keys(obj).map(e => obj[e])
  actions.addList(list)
}

const Formfiles = () => {
  return (
    <div className="block-form-files">
      <form>
        <label className="label-form-files" htmlFor="a">Add files</label>
        <input
          onChange={addingState}
          id="a"
          className="input-form-files"
          type="file"
          multiple
        />
      </form>
    </div>
  )
}

export default Formfiles