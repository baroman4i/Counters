import React from 'react'
import AddCounter from './AddCounter'
import ResetCounter from './ResetCounter'
function SideBar() {
  return (
    <div className="sidebar d-flex justify-content-around">
      <AddCounter/>
      <ResetCounter/>
    </div>
  )
}

export default SideBar
