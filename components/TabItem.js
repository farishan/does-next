import { useEffect, useRef } from 'react'

export default function TabItem({
  index,
  isActive,
  children,
  onActive,
  ...props
}) {
  const ref = useRef()
  const baseClass = `py-3 md:py-5 mr-10 lg:mr-20 lg:text-2xl select-none relative`
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
      <span className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-full pointer-events-none">
        {children}
      </span>
    </div>
  )
}
