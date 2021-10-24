import Link from 'next/dist/client/link'

const ActiveBar = ({ isActive }) => {
  return (
    <>
      <div
        className={`absolute left-0 top-1/2 -translate-y-1/2 w-0.5 lg:w-1 h-8 lg:h-16 ${
          isActive ? 'bg-primary' : 'bg-transparent'
        }`}
      ></div>
    </>
  )
}

const MenuItem = ({
  accent,
  item,
  isActive,
  isLast,
  extendClass = '',
  ...props
}) => {
  const animationClass = 'transition-all duration-400 ease-in-out'
  const sizeClass = isActive ? 'text-3xl lg:text-7xl' : 'text-2xl lg:text-5xl'

  if (accent)
    return (
      <div
        className={`w-max mb-4 ${!isLast ? 'mb-4 lg:mb-2' : 'mb-0'}`}
        {...props}
      >
        <Link href={item.path}>
          <a
            className={`${animationClass} relative flex items-center font-body cursor-pointer text-white ${
              isActive
                ? 'font-medium lg:font-semibold h-12 lg:h-28 hover:text-white pl-4 lg:pl-6 ml-0.5 lg:ml-1'
                : 'lg:font-semibold h-9 lg:h-18 opacity-50'
            }`}
          >
            <ActiveBar isActive={isActive} />
            <span className={`${animationClass} block ${sizeClass}`}>
              {item.label}
            </span>
          </a>
        </Link>
      </div>
    )

  return (
    <>
      <div className={`flex flex-wrap lg:pl-2 ${extendClass}`} {...props}>
        <Link href={item.path}>
          <span
            className={`${animationClass} text-sm tracking-widest uppercase cursor-pointer font-light border-b border-transparent pb-1 -mb-1 ${
              !isLast ? 'lg:mr-12' : 'mr-0'
            } ${isActive ? 'border-primary' : 'text-white'}`}
          >
            {item.label}
          </span>
        </Link>
      </div>
    </>
  )
}

MenuItem.displayName = 'MenuItem'
export default MenuItem
