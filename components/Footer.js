import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const navItems = [
    { label: 'TENTANG DOES', path: '#' },
    { label: 'JURUSAN', path: '#' },
    { label: 'HUBUNGI KAMI', path: '#' },
    { label: 'KARYA UNGGULAN', path: '#' },
    { label: 'KARYA PENDEK', path: '#' },
    { label: 'BERITA', path: '#' },
    { label: 'MERCHANDISE', path: '#' },
    { label: 'DONASI', path: '#' }
  ]

  const socialMediaLogoPaths = [
    {
      name: 'facebook',
      src: require('../assets/icons/icon-fb-white.png'),
      path: '#'
    },
    {
      name: 'twitter',
      src: require('../assets/icons/icon-twitter-white.png'),
      path: '#'
    },
    {
      name: 'instagram',
      src: require('../assets/icons/icon-ig-white.png'),
      path: '#'
    },
    {
      name: 'youtube',
      src: require('../assets/icons/icon-youtube-white.png'),
      path: '#'
    }
  ]

  return (
    <footer className="flex flex-col items-center justify-center w-full pb-20 pt-10">
      <div className="w-44 flex justify-between mb-14">
        {socialMediaLogoPaths.map((item, idx) => (
          <Link key={idx} href={item.path}>
            <a>
              <Image src={item.src} height={20} width={20} alt="facebook" />
            </a>
          </Link>
        ))}
      </div>
      <div className="flex flex-wrap justify-center mb-10 w-2/3">
        {navItems.map((item, idx) => (
          <div key={idx} className="flex items-center">
            <Link href={item.path}>
              <a
                className={`text-white ${
                  idx !== navItems.length - 1 ? 'mr-4' : 'mr-0'
                }`}
              >
                {item.label}
              </a>
            </Link>
            {idx !== navItems.length - 1 && (
              <div className="h-5 border-r mr-4" />
            )}
          </div>
        ))}
      </div>
      <p className="text-gray-400 text-sm">
        &copy; 2015 - 2021 DOES UNIVERSITY{' '}
      </p>
    </footer>
  )
}
