import React, { useState } from 'react'
import useContent from '@/helpers/use-content'
import Image from 'next/image'
import Link from 'next/link'
import IconRight from './icons/IconRight'
import ChevronDown from './icons/ChevronDown'

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
          {/* @todo: split modal to new component */}
          {!showNavModal ? (
            <button className="block sm:hidden" onClick={toggleNavModal}>
              <div className="w-5 border-b-2 mb-1" />
              <div className="w-5 border-b-2 mb-1" />
              <div className="w-5 border-b-2" />
            </button>
          ) : (
            <div className="flex sm:hidden justify-end w-full h-full fixed z-40 right-0 top-0 bg-gray-400 bg-opacity-60">
              <div className="bg-black fixed right-0 top-0 w-40 h-full py-10 flex flex-col items-end">
                <button className="mb-5 px-2" onClick={toggleNavModal}>
                  <IconRight />
                </button>
                <div className="flex flex-col items-end px-5">
                  {navItems.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={toggleNavModal}
                      className="mb-5 text-right"
                    >
                      <Link key={idx} href={item.path}>
                        <a
                          className={`font-accent text-xs text-white uppercase`}
                        >
                          {item.label}
                        </a>
                      </Link>
                      {item.children && (
                        <ul className={`text-right`}>
                          {item.children.map((child, index) => (
                            <li key={child.path + index}>
                              <Link href={child.path}>
                                <a
                                  className={`font-accent text-xs uppercase text-white`}
                                >
                                  {child.label}
                                </a>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
          <div className="hidden sm:flex">
            {navItems.map((item, idx) => (
              <div
                key={idx}
                onMouseOver={() => handleHover(idx)}
                onMouseLeave={() => handleHover(false)}
              >
                <Link href={item.path}>
                  <a
                    className={`font-accent text-xs text-white uppercase flex ${
                      idx !== navItems.length - 1 ? 'mr-5' : 'mr-0'
                    }`}
                  >
                    <span className="mr-1">{item.label}</span>
                    {item.children && <ChevronDown />}
                  </a>
                </Link>
                {item.children && (
                  <ul
                    className={`bg-white p-2 absolute ${
                      hoveredNav === idx ? '' : 'hidden'
                    }`}
                  >
                    {item.children.map((child, index) => (
                      <li key={child.path + index}>
                        <Link href={child.path}>
                          <a
                            className={`font-accent text-xs uppercase ${
                              index !== navItems.length - 1 ? 'mr-5' : 'mr-0'
                            }`}
                          >
                            {child.label}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
