import * as React from 'react'

function ActivityArrow(props) {
  return (
    <svg
      width="19"
      height="14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19 14"
      {...props}
    >
      <path
        d="M13.053 12.963l3.95-5.535-2.024-2.732-2.025-2.732"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path fill="#fff" d="M-.001 7.08l17-.152.008 1L.008 8.08z" />
    </svg>
  )
}

export default ActivityArrow
