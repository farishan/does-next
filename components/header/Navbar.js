import React from 'react'
import Link from 'next/dist/client/link'
import Image from 'next/image'

const Navbar = ({
  navItems,
  hoveredNav,
  handleHover,
  toggleNavModal,
  showNavModal,
  siteLogo,
  socialMediaLogoPaths,
  activeRoute
}) => {
  return (
    <>
      {!showNavModal ? (
        <button className="flex flex-col items-end" onClick={toggleNavModal}>
          <div className="w-5 border-b-2 mb-1" />
          <div className="w-3 border-b-2" />
        </button>
      ) : (
        <div className="bg-black backdrop-filter backdrop-blur-xl bg-opacity-90 fixed right-0 top-0 w-screen h-screen flex flex-col justify-between pb-14">
          <div className="container flex items-center justify-between h-24">
            {siteLogo()}
            <div className="flex items-center">
              <div className="flex items-center">
                <button className="py-3 px-5 mr-5">
                  <span className="text-xs uppercase text-primary">Daftar</span>
                </button>
                <button className="py-3 px-5 mr-5 border">
                  <span className="text-xs uppercase">Masuk</span>
                </button>
              </div>
              <div>
                <button className="mb-5 px-2 relative" onClick={toggleNavModal}>
                  <div className="w-5 border-b-2 rotate-45" />
                  <div className="w-5 border-b-2 -rotate-45 absolute top-0" />
                </button>
              </div>
            </div>
          </div>
          <nav className="container mb-40">
            {navItems.map((item, idx) => {
              const isHighlighted =
                hoveredNav === navItems.indexOf(item) ||
                (activeRoute === item.path && (!hoveredNav || hoveredNav > 4))
              if (idx <= 4) {
                return (
                  <div
                    key={idx}
                    onMouseOver={() => handleHover(navItems.indexOf(item))}
                    onMouseLeave={() => handleHover(false)}
                    className="w-max"
                  >
                    <Link href={item.path}>
                      <span
                        className={`font-body font-medium flex ${
                          idx !== navItems.length - 1 ? 'mb-7' : 'mb-0'
                        } ${
                          isHighlighted
                            ? 'text-white text-6xl cursor-pointer'
                            : 'text-gray-400 text-4xl'
                        }`}
                      >
                        {isHighlighted && (
                          <div className="h-12 border-r-2 border-red-700 mr-4 mt-2" />
                        )}
                        <span className="mr-1">{item.label}</span>
                      </span>
                    </Link>
                  </div>
                )
              }
            })}
          </nav>
          <div className="container w-full flex justify-between items-center">
            <nav className="w-full flex">
              {navItems.map((navItem, index) => {
                const isHighlighted =
                  hoveredNav === navItems.indexOf(navItem) ||
                  (activeRoute === navItem.path &&
                    (!hoveredNav || hoveredNav <= 4))
                if (index > 4) {
                  return (
                    <div
                      key={index}
                      onMouseOver={() => handleHover(navItems.indexOf(navItem))}
                      onMouseLeave={() => handleHover(false)}
                    >
                      <Link href={navItem.path}>
                        <span
                          className={`font-accent text-xs uppercase flex ${
                            index !== navItems.length - 1 ? 'mr-10' : 'mr-0'
                          } ${
                            isHighlighted
                              ? 'text-red-700 cursor-pointer'
                              : 'text-gray-400'
                          }`}
                        >
                          <span className="mr-1">{navItem.label}</span>
                        </span>
                      </Link>
                    </div>
                  )
                }
              })}
            </nav>
            <div>
              <div className="flex">
                {socialMediaLogoPaths.map((item, idx) => (
                  <Link key={idx} href={item.path}>
                    <a
                      target="_blank"
                      className={`${
                        idx !== socialMediaLogoPaths.length - 1
                          ? 'mr-7'
                          : 'mr-0'
                      }`}
                    >
                      <Image
                        src={item.src}
                        height={20}
                        width={20}
                        alt="facebook"
                      />
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
