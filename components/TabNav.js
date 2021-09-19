import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import TabItem from './TabItem'

export default function TabNav() {
  const router = useRouter()
  const [width, setWidth] = useState(0)
  const [left, setLeft] = useState(0)
  const [selected, setSelected] = useState('a')

  useEffect(() => {}, [router])

  const items = [
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

  const handleClick = (id) => {
    setSelected(id)
  }

  const handleActive = (target) => {
    const { clientWidth, offsetLeft } = target
    setWidth(clientWidth)
    setLeft(offsetLeft)
  }

  // router.replace(router.pathname + `?active=${item.id}`

  return (
    <nav className="flex flex-wrap items-center border-b border-white border-opacity-50 w-full relative">
      {items.map((item) => (
        <TabItem
          key={`tabItem_${item.id}`}
          isActive={selected === item.id}
          onClick={() => handleClick(item.id)}
          onActive={handleActive}
        >
          {item.label}
        </TabItem>
      ))}
      <div
        className="absolute bottom-0 left-0 h-0.5 md:h-1 bg-primary trans transition-all duration-300 ease-custom-cubic"
        style={{
          width,
          transform: `translateX(${left}px)`,
          marginBottom: '-1px'
        }}
      ></div>
    </nav>
  )
}
