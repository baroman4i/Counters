import React, {useContext} from 'react'
import {Context} from './ContextCounters'
function AddCounter() {
  const {addCounter} = useContext(Context)
  return (
    <div className="btn btn-primary" onClick={() => addCounter()}>
      Add Counter
    </div>
  )
}

export default AddCounter
