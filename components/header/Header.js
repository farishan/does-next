import React, { useState } from 'react'
import useContent from '@/helpers/use-content'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './Menu'
import { BLUR_IMAGE } from '@/constants'
import MenuTrigger from './MenuTrigger'
import Button from '../Button'

/*
  throttle: cooldown time between showMenu state changes.
  - Set to 800ms for safer microanimations.
  - Set to 0 for faster toggling.
  !WARNING: 0 cooldown time = menu toggling can be abused by user.
*/
const THROTTLE = 600 // ms

export default function Header() {
  const [isCoolingDown, setIsCoolingDown] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const { site_logo } = useContent()

  const toggleMenu = () => {
    if (!isCoolingDown) {
      setIsCoolingDown(true)
      setShowMenu(!showMenu)
      setTimeout(() => {
        setIsCoolingDown(false)
      }, THROTTLE)
    }
  }

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
    <>
      <header className="fixed z-header w-full">
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
              {showMenu && (
                <div className="items-center hidden lg:flex opacity-0 animate-fade-in-delayed">
                  <Button transparent extendClass="mr-2">
                    <span className="text-xs uppercase">Daftar</span>
                  </Button>
                  <Button outline extendClass="mr-10">
                    <span className="text-xs uppercase">Masuk</span>
                  </Button>
                </div>
              )}
              <MenuTrigger isActive={showMenu} onClick={toggleMenu} />
            </div>
          </div>
        </div>
      </header>

      <Menu show={showMenu} />
    </>
  )
}
