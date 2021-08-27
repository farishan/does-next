import useContent from '@/helpers/use-content'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const { site_logo } = useContent()

  const navItems = [
    { label: 'TENTANG KAMI', path: '/about' },
    { label: 'KARYA', path: '#' },
    { label: 'BERITA', path: '#' },
    { label: 'MERCHANDISE', path: '#' },
    { label: 'DONASI', path: '#' },
    { label: 'PENDAFTARAN', path: '#' }
  ]

  return (
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
        <div>
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
  )
}
