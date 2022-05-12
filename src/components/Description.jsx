import React from 'react'

export default function Description(showModal, setShowModal, overview) {
  console.log(overview)
  return (
  <div>
    {showModal ? <div>description: {overview}</div> : null}
  </div>
  )
}
