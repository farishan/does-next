import React from 'react'

export default function UnderlinedTitle({
  text1,
  text2,
  lineBold,
  BigText,
  hoverable,
  customSize
}) {
  const animationClass = 'transition-colors duration-200 ease-in-out'
  const sizeClass = customSize
    ? customSize
    : BigText
    ? 'text-2xl md:text-5xl'
    : 'text-2xl md:text-4xl'

  const renderText = (text) => {
    return (
      <div
        className={`${animationClass} ${sizeClass} text-white ${
          hoverable ? 'hover:text-primary' : ''
        } font-body relative z-10 pb-2`}
      >
        {text}
      </div>
    )
  }

  const renderUnderline = () => {
    return (
      <div
        className={`w-full h-10 border-red-700 ${
          lineBold ? 'border-t-8 -translate-y-3' : 'border-t-2'
        }`}
      />
    )
  }

  return (
    <div className={text2 ? '-mb-20' : '-mb-10'}>
      <div className="w-max">
        {renderText(text1)}
        {renderUnderline()}
      </div>
      {text2 && (
        <div className="w-max -translate-y-8">
          {renderText(text2)} {renderUnderline()}
        </div>
      )}
    </div>
  )
}
