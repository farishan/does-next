import React from 'react'

export default function UnderlinedTitle({ text1, text2, lineBold, BigText }) {
  const renderText = (text) => {
    return (
      <span
        className={`text-white font-body relative z-10 ${
          BigText ? 'text-2xl md:text-5xl' : 'text-2xl md:text-4xl'
        }`}
      >
        {text}
      </span>
    )
  }

  const renderUnderline = () => {
    return (
      <div
        className={`w-full h-10 border-red-700 ${
          lineBold ? 'border-t-8 -translate-y-3' : 'border-t-2 translate-y-4'
        }`}
      />
    )
  }

  return (
    <>
      <div className="w-max">
        {renderText(text1)}
        {renderUnderline()}
      </div>
      {text2 && (
        <div className="w-max -translate-y-8">
          {renderText(text2)}
          {renderUnderline()}
        </div>
      )}
    </>
  )
}
