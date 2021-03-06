const DateLabel = ({ color, extendClass = '', children }) => {
  return (
    <>
      <p
        className={`pl-4 border-l-2 border-primary text-xs lg:text-sm uppercase ${
          color ? color : 'text-gray-bbb'
        } ${extendClass}`}
      >
        {children}
      </p>
    </>
  )
}

DateLabel.displayName = 'DateLabel'
export default DateLabel
