import { useState } from 'react'

export default function LinkArrow({ children }) {
  const [hovered, setHovered] = useState(false)

  const animationClass = 'transition-all duration-200 ease-in-out'

  return (
    <span
      className="text-primary flex items-center uppercase text-sm lg:text-base"
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="mr-4 leading-none">{children}</span>
      <span className="scale-90 lg:scale-100">
        <svg
          width="22"
          height="14"
          viewBox="0 0 22 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            minWidth: '22px',
            transform: `translateX(${hovered ? '5px' : '0'})`
          }}
          className={animationClass}
        >
          <path
            d="M1 7H21M21 7L15 1M21 7L15 13"
            stroke="#D2292D"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </span>
  )
}
