/* TODO integrate with sections, refactor */

import { useEffect, useState } from 'react'

const animationClass = 'transition-all duration-200 ease-in-out'

const Circle = ({ isActive, ...props }) => {
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

export default function VerticalStepper({
  active = 0,
  onClick = () => {},
  steps = [1, 2, 3, 4]
}) {
  const [activeLocal, setActiveLocal] = useState(0)

  useEffect(() => {
    if (active !== activeLocal) {
      setActiveLocal(active)
    }
  }, [active, activeLocal])

  return (
    <div className="flex flex-col items-center justify-between">
      {steps.map((step, index) =>
        index === 0 ? (
          <Circle
            isActive={index <= activeLocal}
            onClick={() => onClick(index)}
            key={`step_${index}`}
          />
        ) : (
          <div className="flex flex-col items-center" key={`step_${index}`}>
            <Line isActive={index <= activeLocal} />
            <Circle
              isActive={index <= activeLocal}
              onClick={() => onClick(index)}
            />
          </div>
        )
      )}
    </div>
  )
}
