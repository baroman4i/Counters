import React, {useContext} from 'react'
import {Context} from './ContextCounters'
function ResetCounter() {
  const {resetCounters} = useContext(Context)
  return (
    <div className="btn btn-danger" onClick={() => resetCounters()}>
      Reset
    </div>
  )
}

export default ResetCounter
