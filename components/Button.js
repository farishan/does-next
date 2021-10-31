import useContent from '@/helpers/use-content'
import { useState } from 'react'

export default function Button({
  viewMore,
  extendClass = '',
  children,
  outline,
  transparent,
  arrow,
  ...props
}) {
  const { label_view_more } = useContent()
  const [hovered, setHovered] = useState(false)
  const text = viewMore ? label_view_more : children

  const baseClass = `select-none border border-transparent py-3 px-6 md:py-4 md:px-8 text-white text-sm font-light md:font-normal uppercase leading-loose ${
    arrow ? 'flex items-center' : ''
  }`
  const animationClass = 'transition-all duration-200 ease-in-out'
  const stateClass = `${
    outline
      ? 'border-white text-white hover:bg-primary hover:border-primary border-opacity-30'
      : transparent
      ? 'text-primary hover:text-white hover:bg-primary hover:border-primary'
      : 'bg-primary hover:text-primary hover:bg-transparent hover:border-primary'
  }`
  const className = `${baseClass} ${animationClass} ${stateClass} ${extendClass}`

  return (
    <>
      <button
        className={className}
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        {...props}
      >
        {text}
        {arrow && (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${animationClass} ml-3`}
            style={{
              minWidth: '24px',
              transform: `translateX(${hovered ? '5px' : '0'})`
            }}
          >
            <path
              d="M2 12H22M22 12L16 6M22 12L16 18"
              stroke={!outline && hovered ? '#D2292D' : '#fff'}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </>
  )
}
