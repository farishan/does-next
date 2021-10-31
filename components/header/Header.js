import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import useContent from '@/helpers/use-content'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './Navbar'
// import NavbarMobileView from './NavbarMobileView'

export default function Header() {
  const [showNavModal, setShowNavModal] = useState(false)
  const [hoveredNav, setHoveredNav] = useState(null)
  const [activeRoute, setActiveRoute] = useState('/')

  const router = useRouter()
  const {
    site_logo,
    nav_works_top,
    nav_works_short,
    nav_blog,
    nav_merchandise,
    nav_registration,
    nav_about,
    nav_department,
    nav_donation,
    nav_contact,
    site_instagram,
    site_youtube,
    site_twitter,
    site_facebook
  } = useContent()

  useEffect(() => {
    const currentRoute = router.pathname
    setActiveRoute(currentRoute)
  }, [router.pathname])

  const navItems = [
    { label: nav_works_top, path: '/works/featured' },
    { label: nav_works_short, path: '/works' },
    { label: nav_blog, path: '/blog' },
    { label: nav_merchandise, path: '#' },
    { label: nav_registration, path: '#' },
    { label: nav_about, path: '/about' },
    { label: nav_department, path: '#' },
    { label: nav_donation, path: '#' },
    { label: nav_contact, path: '/contact' }
  ]

  const socialMediaLogoPaths = [
    {
      name: 'facebook',
      src: require('../../assets/icons/icon-fb-grey.png'),
      path: site_facebook
    },
    {
      name: 'twitter',
      src: require('../../assets/icons/icon-twitter-grey.png'),
      path: site_twitter
    },
    {
      name: 'instagram',
      src: require('../../assets/icons/icon-ig-grey.png'),
      path: site_instagram
    },
    {
      name: 'youtube',
      src: require('../../assets/icons/icon-youtube-grey.png'),
      path: site_youtube
    }
  ]

  const toggleNavModal = () => {
    setShowNavModal(!showNavModal)
  }

  const handleHover = (index = null) => {
    setHoveredNav(index)
  }

  const renderSiteLogo = () => {
    return (
      <Link href="/">
        <a>
          <Image src={`${site_logo}`} height={40} width={70} alt="main-logo" />
        </a>
      </Link>
    )
  }

  return (
    <header className="md:fixed z-50 w-full">
      <div className="container">
        <div className="flex items-center justify-between h-24">
          <Link href="/">
            <a>
              <Image
                src={`${site_logo}`}
                height={40}
                width={70}
                alt="main-logo"
              />
            </a>
          </Link>

          {/* Navbar - mobile view */}
          {/* <NavbarMobileView
            navItems={navItems}
            toggleNavModal={toggleNavModal}
            showNavModal={showNavModal}
            hoveredNav={hoveredNav}
            handleHover={handleHover}
          /> */}

          {/* Navbar - non mobile view */}
          <Navbar
            navItems={navItems}
            hoveredNav={hoveredNav}
            handleHover={handleHover}
            toggleNavModal={toggleNavModal}
            showNavModal={showNavModal}
            siteLogo={renderSiteLogo}
            socialMediaLogoPaths={socialMediaLogoPaths}
            activeRoute={activeRoute}
          />
        </div>
      </div>
    </header>
  )
}
