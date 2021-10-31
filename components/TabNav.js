import { createRef, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import TabItem from './TabItem'

const defaultTabs = [
  {
    id: 'a',
    label: 'Menu A'
  },
  {
    id: 'b',
    label: 'Menu B'
  },
  {
    id: 'c',
    label: 'Menu C'
  }
]

export default function TabNav({
  tabs = defaultTabs,
  onChange = () => {},
  defaultValue,
  watchThis
}) {
  const ref = createRef()
  const [width, setWidth] = useState(0)
  const [left, setLeft] = useState(0)
  const [viewport, setViewport] = useState(0)
  const [selected, setSelected] = useState(defaultValue ? defaultValue : 'all')
  const [showOverlay, setShowOverlay] = useState(false)
  const [implementingPage, setImplementingPage] = useState('')

  const router = useRouter()

  useEffect(() => {
    if (watchThis && watchThis !== selected) {
      setSelected(watchThis)
    }

    // eslint-disable-next-line
  }, [watchThis])

  const listener = (e) => {
    setViewport(e.target.innerWidth)
  }

  useEffect(() => {
    const currentMainPathName = router.pathname.split('/')

    window.addEventListener('resize', listener)

    setImplementingPage(currentMainPathName[1])

    if (currentMainPathName[1] === 'works') setSelected(router.pathname)

    return () => {
      window.removeEventListener('resize', listener)
    }
  }, [])

  useEffect(() => {
    if (ref.current.clientWidth < ref.current.scrollWidth) {
      if (showOverlay !== true) {
        setShowOverlay(true)
      }
    } else {
      if (showOverlay !== false) {
        setShowOverlay(false)
      }
    }
    // eslint-disable-next-line
  }, [ref, viewport])

  const handleClick = (id, pathName) => {
    /**
     * Check where this component implemented
     * Do the action according to the current page needed
     */
    switch (implementingPage) {
      case 'blog':
        onChange(id)
        setSelected(id)
        break
      case 'works':
        onChange(pathName)
        setSelected(pathName)
        break
    }
  }

  const handleActive = (target) => {
    const { clientWidth, offsetLeft } = target
    setWidth(clientWidth)
    setLeft(offsetLeft)
  }

  // router.replace(router.pathname + `?active=${tab.id}`

  return (
    <div className="relative">
      <nav
        className={`flex items-center w-full relative overflow-x-auto no-scrollbar ${
          showOverlay ? 'pr-20' : ''
        }`}
        ref={ref}
      >
        {tabs.map((tab, index) => (
          <TabItem
            key={`tabItem_${tab.id}`}
            isActive={selected === tab.id || selected === tab.path}
            onClick={() => handleClick(tab.id, tab.path)}
            onActive={handleActive}
            isLast={index === tabs.length - 1}
          >
            {tab.label}
          </TabItem>
        ))}
        <div
          className="absolute z-10 bottom-0 left-0 h-0.5 md:h-1 bg-primary trans transition-all duration-300 ease-custom-cubic"
          style={{
            width,
            transform: `translateX(${left}px)`
          }}
        ></div>
      </nav>
      <hr className="border-0 border-b border-white border-opacity-50 absolute w-full bottom-0 left-0" />
      {showOverlay && (
        <div
          className="absolute h-full w-20 linear right-0 bottom-0 pointer-events-none"
          style={{
            background: `linear-gradient(-90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)`
          }}
        ></div>
      )}
    </div>
  )
}
