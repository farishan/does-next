/* TODO integrate with sections, refactor */

import { useState } from 'react'

const animationClass = 'transition-all duration-200 ease-in-out'

const Dot = ({ isActive, ...props }) => {
  return (
    <div
      className={`cursor-pointer rounded-full border border-white ${
        isActive ? 'border-opacity-60' : 'border-opacity-30'
      } h-4 w-4 flex items-center justify-center`}
      {...props}
    >
      <div
        className={`${animationClass} w-1 h-1 box-content border border-white rounded-full bg-white ${
          isActive ? 'scale-100' : 'scale-0'
        }`}
      ></div>
    </div>
  )
}

const Line = ({ isActive }) => {
  return (
    <div
      className={`${animationClass} h-8 border-0 border-r border-white ${
        isActive ? 'opacity-60' : 'opacity-30'
      }`}
    ></div>
  )
}

export default function DotNav() {
  const [a, setA] = useState(0)

  const dots = [1, 2, 3, 4]

  return (
    <div className="flex flex-col items-center justify-between">
      {dots.map((dot, index) =>
        index === 0 ? (
          <Dot
            isActive={index <= a}
            onClick={() => setA(index)}
            key={`dot_${index}`}
          />
        ) : (
          <>
            <Line isActive={index <= a} />
            <Dot
              isActive={index <= a}
              onClick={() => setA(index)}
              key={`dot_${index}`}
            />
          </>
        )
      )}
    </div>
  )
}
