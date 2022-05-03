import React from 'react'

export default function Description(showModal, setShowModal, description) {
  console.log(description)
  return (
  <div>
    {showModal ? <div>description{description}</div> : null}
  </div>
  )
}
