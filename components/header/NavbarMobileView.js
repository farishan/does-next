import React from 'react'
import Link from 'next/link'
import IconRight from '../icons/IconRight'
import ChevronDown from '../icons/ChevronDown'

const NavbarMobileView = ({
  navItems,
  toggleNavModal,
  showNavModal,
  hoveredNav,
  handleHover
}) => {
  return (
    <>
      {!showNavModal ? (
        <button
          className="flex sm:hidden flex-col items-end"
          onClick={toggleNavModal}
        >
          <div className="w-5 border-b-2 mb-1" />
          <div className="w-3 border-b-2" />
        </button>
      ) : (
        <nav className="flex sm:hidden justify-end w-full h-full fixed z-40 right-0 top-0 bg-gray-400 bg-opacity-60">
          <div className="bg-black fixed right-0 top-0 w-52 h-full py-10 flex flex-col items-end">
            <button className="mb-5 px-2 relative" onClick={toggleNavModal}>
              {/* <IconRight /> */}
              <div className="w-5 border-b-2 rotate-45" />
              <div className="w-5 border-b-2 -rotate-45 absolute top-0" />
            </button>
            <div className="flex flex-col items-end px-5 w-full">
              {navItems.map((item, idx) => (
                <div
                  key={idx}
                  onMouseOver={() => handleHover(idx)}
                  onMouseLeave={() => handleHover(false)}
                  className="flex flex-col items-end w-full"
                >
                  <Link href={item.path}>
                    <a
                      className={`font-accent text-xs text-white uppercase flex ${
                        idx !== navItems.length - 1 &&
                        (item.children?.length < 0 ||
                          (item.children?.length > 0 && hoveredNav))
                          ? 'mb-3'
                          : 'mb-0'
                      }`}
                    >
                      {console.log(
                        item.label,
                        ' need space >> ',
                        item.children?.length < 0 ||
                          (item.children?.length > 0 && hoveredNav)
                      )}
                      <span>{item.label}</span>
                    </a>
                  </Link>
                  {item.children?.length && (
                    <div
                      className={`flex flex-col items-end ${
                        hoveredNav === idx ? '' : 'hidden'
                      }`}
                    >
                      {item.children.map((child, index) => (
                        <div
                          key={index}
                          className={`mb-3 ${index === 0 ? 'mt-2' : 'mb-0'}`}
                        >
                          <Link href={child.path}>
                            <a
                              className={`font-accent text-xs text-white uppercase flex`}
                            >
                              <span>{child.label}</span>
                            </a>
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </nav>
      )}
    </>
  )
}

export default NavbarMobileView
