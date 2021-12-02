import { useEffect, useRef } from 'react'

export default function TabItem({
  index,
  isActive,
  children,
  onActive,
  isLast,
  ...props
}) {
  const ref = useRef()
  const baseClass = `TabItem py-3 md:py-5 px-5 ${
    isLast ? '' : 'mr-5 md:mr-10'
  } lg:text-2xl select-none relative whitespace-nowrap`
  const animationClass = 'transition-color duration-200 ease-in-out'
  const stateClass = `${
    isActive
      ? 'font-medium'
      : 'text-gray-888 hover:text-white font-light cursor-pointer'
  }`

  useEffect(() => {
    if (isActive) onActive(ref.current)
  }, [isActive, onActive])

  return (
    <div
      ref={ref}
      style={{ WebkitTapHighlightColor: 'transparent' }}
      className={`${baseClass} ${animationClass} ${stateClass}`}
      {...props}
    >
      <span className="font-medium opacity-0 relative z-10 h-full pointer-events-none">
        {children}
      </span>

      {/* Masking to fix font-weight glitch */}
      <span className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-full pointer-events-none text-center">
        {children}
      </span>
    </div>
  )
}
