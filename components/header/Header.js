import React, { useEffect, useState } from 'react'
import useContent from '@/helpers/use-content'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './Menu'
import { BLUR_IMAGE } from '@/constants'
import MenuTrigger from './MenuTrigger'
import { useRouter } from 'next/router'
// import Button from '../Button'

/*
  throttle: cooldown time between showMenu state changes.
  - Set to 800ms for safer microanimations.
  - Set to 0 for faster toggling.
  !WARNING: 0 cooldown time = menu toggling can be abused by user.
*/
const THROTTLE = 600 // ms

export default function Header() {
  const router = useRouter()
  const [isCoolingDown, setIsCoolingDown] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const { site_logo } = useContent()
  const [showBackground, setShowBackground] = useState(false)

  // const navItems = [
  //   { label: nav_works_top, path: '/works/featured' },
  //   { label: nav_works_short, path: '/works' },
  //   { label: nav_blog, path: '/blog' },
  //   { label: nav_merchandise, path: '#' },
  //   { label: nav_registration, path: '#' },
  //   { label: nav_about, path: '/about' },
  //   { label: nav_department, path: '#' },
  //   { label: nav_donation, path: '#' },
  //   { label: nav_contact, path: '/contact' }
  // ]

  useEffect(() => {
    setShowMenu(false)
  }, [router.asPath])

  const toggleMenu = () => {
    if (!isCoolingDown) {
      setIsCoolingDown(true)
      setShowMenu(!showMenu)
      setTimeout(() => {
        setIsCoolingDown(false)
      }, THROTTLE)
    }
  }

  /* @TODO: delete unnecessary functions */
  // const toggleNavModal = () => {
  //   setShowNavModal(!showNavModal)
  // }

  // const handleHover = (index = null) => {
  //   setHoveredNav(index)
  // }

  // const renderSiteLogo = () => {
  //   return (
  //     <Link href="/">
  //       <a>
  //         <Image src={`${site_logo}`} height={40} width={70} alt="main-logo" />
  //       </a>
  //     </Link>
  //   )
  // }

  useEffect(() => {
    const listener = (e) => {
      if (e.target.scrollingElement.scrollTop > 100) {
        setShowBackground(true)
      } else {
        setShowBackground(false)
      }
    }

    if (window) {
      window.addEventListener('scroll', listener)
    }

    return () => {
      window.removeEventListener('scroll', listener)
    }
  }, [])

  return (
    <>
      <header
        className={`fixed z-header w-full transition-transform duration-200 ${
          showBackground ? 'lg:-translate-y-6' : 'translate-y-0'
        }`}
      >
        <div
          className={`absolute h-full w-full left-0 top-0 transition-all duration-200 ${
            showBackground ? 'lg:-translate-y-6 bg-black bg-opacity-90 backdrop-blur shadow-xl' : '-translate-y-full shadow-xs'
          }`}
        ></div>
        <div className="container">
          <div className="flex items-center justify-between py-6 lg:py-12">
            <Link href="/">
              <a>
                <div className="hidden lg:block">
                  <Image
                    src={`${site_logo}`}
                    height={56}
                    width={100}
                    alt="main-logo"
                    className="object-contain object-center"
                    placeholder="blur"
                    blurDataURL={BLUR_IMAGE}
                  />
                </div>
                <div className="lg:hidden">
                  <Image
                    src={`${site_logo}`}
                    height={40}
                    width={73}
                    alt="main-logo"
                    className="object-contain object-center"
                    placeholder="blur"
                    blurDataURL={BLUR_IMAGE}
                  />
                </div>
              </a>
            </Link>

            <div className="flex items-center">
              {/* {showMenu && (
                <div className="items-center hidden lg:flex opacity-0 animate-fade-in-delayed">
                  <Button transparent extendClass="mr-2">
                    <span className="text-xs uppercase">Daftar</span>
                  </Button>
                  <Button outline extendClass="mr-10">
                    <span className="text-xs uppercase">Masuk</span>
                  </Button>
                </div>
              )} */}
              <MenuTrigger isActive={showMenu} onClick={toggleMenu} />
            </div>
          </div>
        </div>
      </header>

      <Menu show={showMenu} />
    </>
  )
}
