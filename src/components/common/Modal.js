/* eslint-disable implicit-arrow-linebreak */
import React from 'react'

function Modal({ active, setActive, children }) {
  return (
    <div
      className={active ? 'modal active' : 'modal'}
      onClick={() => setActive(false)}
      onKeyPress={() => setActive(false)}
      role="button"
      tabIndex="0"
    >
      <div
        className={active ? 'modal__content active' : 'modal__content'}
        onClick={e => e.stopPropagation()}
        onKeyPress={e => e.stopPropagation()}
        role="button"
        tabIndex="0"
      >
        {children}
      </div>
    </div>
  )
}

export default Modal
