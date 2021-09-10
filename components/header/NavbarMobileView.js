import React from 'react'
import Link from 'next/link'
import IconRight from '../icons/IconRight'

const NavbarMobileView = ({ navItems, toggleNavModal, showNavModal }) => {
  return (
    <>
      {!showNavModal ? (
        <button className="block sm:hidden" onClick={toggleNavModal}>
          <div className="w-5 border-b-2 mb-1" />
          <div className="w-5 border-b-2 mb-1" />
          <div className="w-5 border-b-2" />
        </button>
      ) : (
        <nav className="flex sm:hidden justify-end w-full h-full fixed z-40 right-0 top-0 bg-gray-400 bg-opacity-60">
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
                    <a className={`font-accent text-xs text-white uppercase`}>
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
        </nav>
      )}
    </>
  )
}

export default NavbarMobileView
