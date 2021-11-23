import UnderlinedTitle from './UnderlinedTitle'

export default function SoonOverlay({ extendClass = '', children }) {
  return (
    <div
      className={`bg-black bg-opacity-95 absolute w-full h-full left-0 top-0 z-20 ${extendClass}`}
    >
      {children ? children : <UnderlinedTitle text1={'SOON'} />}
    </div>
  )
}
