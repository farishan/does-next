import React, { useState } from 'react'
import useContent from '@/helpers/use-content'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './Navbar'
import NavbarMobileView from './NavbarMobileView'

export default function Header() {
  const [showNavModal, setShowNavModal] = useState(false)
  const [hoveredNav, setHoveredNav] = useState(null)

  const { site_logo, nav_about, nav_works, nav_contact, featured_work_title } =
    useContent()

  const navItems = [
    { label: nav_about, path: '/about' },
    {
      label: nav_works,
      path: '/works',
      children: [{ label: featured_work_title, path: '/works/featured' }]
    },
    // { label: 'BERITA', path: '#' },
    // { label: 'MERCHANDISE', path: '#' },
    // { label: 'DONASI', path: '#' },
    { label: nav_contact, path: '/contact' }
    // { label: 'PENDAFTARAN', path: '#' }
  ]

  const toggleNavModal = () => {
    setShowNavModal(!showNavModal)
  }

  const handleHover = (index) => {
    if (index && hoveredNav !== index) {
      setHoveredNav(index)
    }

    if (!index && hoveredNav !== null) {
      setHoveredNav(null)
    }
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
          <NavbarMobileView
            navItems={navItems}
            toggleNavModal={toggleNavModal}
            showNavModal={showNavModal}
          />

          {/* Navbar - non mobile view */}
          <Navbar
            navItems={navItems}
            hoveredNav={hoveredNav}
            handleHover={handleHover}
          />
        </div>
      </div>
    </header>
  )
}
