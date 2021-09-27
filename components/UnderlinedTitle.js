import React from 'react'

export default function UnderlinedTitle({ text1, text2 }) {
  const renderText = (text) => {
    return (
      <span className="text-white font-body text-5xl relative z-10">
        {text}
      </span>
    )
  }

  const renderUnderline = () => {
    return (
      <div className="w-full h-10 border-t-8 border-red-700 -translate-y-3" />
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
