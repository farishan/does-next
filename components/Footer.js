import Image from 'next/image'
import Link from 'next/link'
import useContent from '@/helpers/use-content'
import UnderlinedTitle from './UnderlinedTitle'

export default function Footer() {
  const {
    site_logo,
    nav_works_top,
    nav_works_short,
    nav_blog,
    nav_merchandise,
    nav_registration,
    nav_about,
    nav_department,
    nav_donation,
    nav_contact,
    copy_right,
    site_email,
    site_instagram,
    site_youtube,
    site_twitter,
    site_facebook
  } = useContent()

  const navItems = [
    {
      label: 'TENTANG KAMI',
      children: [
        { label: nav_about, path: '#' },
        { label: nav_department, path: '#' },
        { label: nav_registration, path: '/registration?tab=information' }
      ]
    },
    {
      label: 'KARYA',
      children: [
        { label: nav_works_short, path: '#' },
        { label: nav_works_top, path: '#' }
      ]
    },
    {
      label: 'LAIN-LAIN',
      children: [
        { label: nav_blog, path: '/blog' },
        { label: nav_merchandise, path: '#' },
        { label: nav_contact, path: '#' },
        { label: nav_donation, path: '#' }
      ]
    }
  ]

  const socialMediaLogoPaths = [
    {
      name: 'facebook',
      src: require('../assets/icons/icon-fb-grey.png'),
      path: site_facebook
    },
    {
      name: 'twitter',
      src: require('../assets/icons/icon-twitter-grey.png'),
      path: site_twitter
    },
    {
      name: 'instagram',
      src: require('../assets/icons/icon-ig-grey.png'),
      path: site_instagram
    },
    {
      name: 'youtube',
      src: require('../assets/icons/icon-youtube-grey.png'),
      path: site_youtube
    }
  ]

  return (
    <footer className="container">
      <div className="hidden sm:flex justify-between py-7">
        <div className="flex justify-start w-1/2">
          <Link href="/">
            <a>
              <Image src={site_logo} height={200} width={358} alt="main-logo" />
            </a>
          </Link>
        </div>
        <div className="w-1/2 flex flex-wrap justify-start">
          {navItems.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full lg:w-1/3 flex flex-col items-start uppercase"
              >
                <span className="font-body text-white mb-7">{item.label}</span>
                <div className="flex flex-col items-start">
                  {item.children?.map((subItem, idx) => {
                    return (
                      <Link key={idx} href={subItem.path}>
                        <a className="font-body text-gray-500 mb-7">
                          {subItem.label}
                        </a>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex py-7 items-center">
        <div className="flex flex-col items-start w-1/2">
          <span className="font-extralight mb-7">HUBUNGI KAMI DI</span>
          <span className="text-lg bra">
            <UnderlinedTitle text1={site_email} />
          </span>
        </div>
        <div className="w-1/2 flex justify-end mr-10">
          {socialMediaLogoPaths.map((item, idx) => (
            <Link key={idx} href={item.path}>
              <a
                target="_blank"
                className={`${
                  idx !== socialMediaLogoPaths.length - 1 ? 'mr-7' : 'mr-0'
                }`}
              >
                <Image src={item.src} height={20} width={20} alt="socmedicon" />
              </a>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-start py-7">
        <span className="text-gray-600">{copy_right}</span>
      </div>
    </footer>
  )
}
