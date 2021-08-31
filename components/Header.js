import React, { useState } from 'react'
import useContent from '@/helpers/use-content'
import Image from 'next/image'
import Link from 'next/link'
import IconRight from '@/components/icons/iconRight'

export default function Header() {
  const [showNavModal, setShowNavModal] = useState(false)

  const { site_logo } = useContent()

  const navItems = [
    { label: 'TENTANG KAMI', path: '/about' },
    // { label: 'KARYA', path: '#' },
    // { label: 'BERITA', path: '#' },
    // { label: 'MERCHANDISE', path: '#' },
    // { label: 'DONASI', path: '#' },
    { label: 'KONTAK', path: '/contact' }
    // { label: 'PENDAFTARAN', path: '#' }
  ]

  const toggleNavModal = () => {
    setShowNavModal(!showNavModal)
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
                    <button key={idx} onClick={toggleNavModal} className="mb-5">
                      <Link key={idx} href={item.path}>
                        <a className={`font-accent text-xs text-white`}>
                          {item.label}
                        </a>
                      </Link>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
          <div className="hidden sm:block">
            {navItems.map((item, idx) => (
              <Link key={idx} href={item.path}>
                <a
                  className={`font-accent text-xs text-white ${
                    idx !== navItems.length - 1 ? 'mr-5' : 'mr-0'
                  }`}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
