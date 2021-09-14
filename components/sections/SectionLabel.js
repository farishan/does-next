import IconHome from '../icons/IconHome'

export default function SectionLabel({ icon, text, extendClass = '' }) {
  const Icon = icon === 'home' ? IconHome : IconHome

  return (
    <>
      <div className={`flex items-center ${extendClass}`}>
        <Icon />
        <span
          className={`${icon ? 'ml-2' : ''} text-gray-888 font-light uppercase`}
          style={{ letterSpacing: '0.2rem' }}
        >
          {text}
        </span>
      </div>
    </>
  )
}
