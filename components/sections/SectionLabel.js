import IconHome from '../icons/IconHome'
import IconPlay from '../icons/IconPlay'
import IconProfile from '../icons/IconProfile'

const map = {
  home: IconHome,
  profile: IconProfile,
  play: IconPlay
}

export default function SectionLabel({ icon, text, extendClass = '' }) {
  const Icon = map[icon] || IconHome

  return (
    <>
      <div className={`flex items-center ${extendClass}`}>
        <div className="hidden md:block">
          <Icon />
        </div>
        <div className="md:hidden">
          <Icon mobile />
        </div>
        <span
          className={`ml-2 text-gray-888 font-light uppercase text-xs md:text-base`}
          style={{ letterSpacing: '0.2rem' }}
        >
          {text}
        </span>
      </div>
    </>
  )
}
