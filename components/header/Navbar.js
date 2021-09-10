import React from 'react'
import Link from 'next/dist/client/link'
import ChevronDown from '../icons/ChevronDown'

const Navbar = ({ navItems, hoveredNav, handleHover }) => {
  return (
    <nav className="hidden sm:flex">
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
              {item.children?.length && <ChevronDown />}
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
    </nav>
  )
}

export default Navbar
