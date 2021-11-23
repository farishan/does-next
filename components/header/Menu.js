import { useState, useEffect } from 'react'
import useContent from '@/helpers/use-content'
import { useRouter } from 'next/router'
import SocialLinks from '@/components/SocialLinks'
import MenuItem from './MenuItem'

const NavWrapper = ({ children }) => {
  return (
    <>
      {/* Mobile */}
      <nav className="container lg:hidden" style={{ minHeight: '256px' }}>
        {children}
      </nav>

      {/* Desktop */}
      <nav
        className="container mb-40 hidden lg:block"
        style={{ minHeight: '432px' }}
      >
        {children}
      </nav>
    </>
  )
}

export default function Menu({ show }) {
  const router = useRouter()
  const [showMenu, setShowMenu] = useState(show)
  const [animationClass, setAnimationClass] = useState('animate-fade-in')
  const [hoveredNav, setHoveredNav] = useState(null)
  const [hoverTimeout, setHoverTimeout] = useState(null)
  const [activeRoute, setActiveRoute] = useState('/')
  const {
    nav_works_top,
    nav_works_short,
    nav_blog,
    nav_merchandise,
    nav_registration,
    nav_about,
    nav_department,
    nav_donation,
    nav_contact
  } = useContent()

  useEffect(() => {
    if (show !== showMenu) {
      if (show === false) {
        setAnimationClass('animate-fade-out')
        setTimeout(() => {
          setShowMenu(show)
        }, 500)
      } else {
        setAnimationClass('animate-fade-in')
        setShowMenu(show)
      }
    }

    // eslint-disable-next-line
  }, [show])

  useEffect(() => {
    const currentRoute = router.pathname
    setActiveRoute(currentRoute)
  }, [router.pathname])

  const navItems = [
    { label: nav_works_top, path: '/works/featured', isDisabled: 1 },
    { label: nav_works_short, path: '#', isDisabled: 1 },
    { label: nav_blog, path: '/blog' },
    { label: nav_merchandise, path: '#', isDisabled: 1 },
    { label: nav_registration, path: '/registration' },

    { label: nav_about, path: '/about' },
    { label: nav_department, path: '/about?tab=major' },
    { label: nav_donation, path: '/about?tab=donation' },
    { label: nav_contact, path: '/about?tab=contact' }
  ]
  const primaryLinks = navItems.slice(0, 5)
  const secondaryLinks = navItems.slice(5, navItems.length)

  const handleMouseOver = (id) => {
    if (hoverTimeout && hoverTimeout !== null) {
      clearTimeout(hoverTimeout)
      setHoveredNav(id)
    }
  }

  const handleMouseLeave = () => {
    if (hoverTimeout && hoverTimeout !== null) {
      clearTimeout(hoverTimeout)
      setHoverTimeout(
        setTimeout(() => {
          setHoveredNav(null)
        }, 1000)
      )
    } else {
      setHoverTimeout(
        setTimeout(() => {
          setHoveredNav(null)
        }, 1000)
      )
    }
  }

  if (!showMenu) return <></>

  return (
    <>
      <div
        className={`bg-black z-menu backdrop-filter backdrop-blur-xl bg-opacity-80 fixed w-full h-full right-0 top-0 ${animationClass}`}
      >
        <div className="flex flex-col justify-between pb-12 pt-24 lg:pt-40 w-full h-screen opacity-0 animate-fade-in-delayed">
          <NavWrapper>
            {primaryLinks.map((item, index) => (
              <MenuItem
                accent
                key={item.label}
                item={item}
                onMouseOver={() => handleMouseOver(item.label)}
                onMouseLeave={handleMouseLeave}
                isDisabled={item.isDisabled}
                isLast={index === primaryLinks.length - 1}
                isActive={
                  hoveredNav === item.label ||
                  (activeRoute === item.path && hoveredNav === null)
                }
              />
            ))}
          </NavWrapper>
          <div className="container w-full flex flex-col lg:flex-row justify-between items-start lg:items-center">
            <nav className="w-full flex flex-col lg:flex-row order-2 lg:order-1">
              {secondaryLinks.map((item, index) => (
                <MenuItem
                  key={item.label}
                  item={item}
                  onMouseOver={() => handleMouseOver(item.label)}
                  onMouseLeave={handleMouseLeave}
                  isLast={index === secondaryLinks.length - 1}
                  isActive={
                    hoveredNav === item.label ||
                    (activeRoute === item.path && hoveredNav === null)
                  }
                  extendClass={`${
                    index === secondaryLinks.length - 1 ? '' : 'mb-4 lg:mb-0'
                  }`}
                />
              ))}
            </nav>
            <div className="mb-12 lg:mb-0 order-1 lg:order-2">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
