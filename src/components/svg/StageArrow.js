import * as React from 'react'

function StageArrow({ color, ...props }) {
  return (
    <svg
      width="14"
      height="7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 7"
      {...props}
    >
      <path
        d="M1 1l6 5 3-2.5L13 1"
        stroke={props.color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default StageArrow
