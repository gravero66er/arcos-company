import * as React from 'react'

function Icon(props) {
  return (
    <svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d={props.path} fill="#fff" />
    </svg>
  )
}

export default Icon
