import Image from 'next/image'
import Link from 'next/link'
import useContent from '@/helpers/use-content'
import UnderlinedTitle from './UnderlinedTitle'
import { sanitize } from 'isomorphic-dompurify'
import IconSocmed from './icons/IconSocmed'

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
    copy_right_mobile,
    site_email,
    site_instagram,
    site_youtube,
    site_twitter,
    site_facebook,
    footer_background
  } = useContent()

  const navItems = [
    {
      label: 'TENTANG KAMI',
      children: [
        { label: nav_about, path: '#' },
        { label: nav_department, path: '#' },
        { label: nav_registration, path: '/registration' }
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
      path: site_facebook,
      icon: <IconSocmed />
    },
    {
      name: 'twitter',
      src: require('../assets/icons/icon-twitter-grey.png'),
      path: site_twitter,
      icon: <IconSocmed type="twitter" />
    },
    {
      name: 'instagram',
      src: require('../assets/icons/icon-ig-grey.png'),
      path: site_instagram,
      icon: <IconSocmed type="instagram" />
    },
    {
      name: 'youtube',
      src: require('../assets/icons/icon-youtube-grey.png'),
      path: site_youtube,
      icon: <IconSocmed type="youtube" />
    }
  ]

  return (
    <footer className="relative">
      <div className="container relative z-20">
        <div className="flex flex-wrap justify-between pt-14 xl:pt-20 lg:mb-20 -mx-2 lg:-mx-4">
          <div className="w-full lg:w-1/2 px-2 lg:px-4">
            <Link href="/">
              <a className="block mb-10 xl:mb-16 md:text-center lg:text-left">
                <Image
                  src={site_logo}
                  height={200}
                  width={358}
                  alt="main-logo"
                />
              </a>
            </Link>
            <div className="mb-14 md:mb-20 lg:mb-0">
              <div>
                <p className="text-sm xl:text-base xl:tracking-widest font-light mb-2 md:mb-4">
                  HUBUNGI KAMI DI
                </p>
                <p className="font-light">
                  <a href={`mailto:${site_email}`}>
                    <UnderlinedTitle
                      text1={site_email}
                      hoverable
                      customSize="text-2xl md:text-4xl xl:text-4xlp"
                    />
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 px-2 lg:px-4">
            <div className="flex flex-wrap justify-start lg:h-full -mx-2 lg:-mx-4">
              {navItems.map((item, index) => (
                <div
                  key={item.label + index}
                  className="w-1/2 md:w-1/3 px-2 lg:px-4 flex flex-col items-start uppercase mb-12 md:mb-0"
                >
                  <span className="font-body text-white mb-5 md:mb-7 text-xs md:text-sm tracking-widest font-medium">
                    {item.label}
                  </span>
                  <div className="flex flex-col items-start text-xs md:text-sm tracking-widest">
                    {item.children?.map((subItem, idx) => {
                      return (
                        <Link key={idx} href={subItem.path}>
                          <a className="font-body text-gray-888 mb-5 md:mb-7 font-light hover:text-white">
                            {subItem.label}
                          </a>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              ))}
              <div className="w-1/2 md:w-full px-2 lg:px-4 mb-12 md:mb-8 md:mt-8 lg:my-0 flex items-end lg:justify-end pb-5 lg:pb-4 xl:pb-5">
                <div className="flex">
                  {socialMediaLogoPaths.map((item, idx) => (
                    <Link key={idx} href={item.path}>
                      <a
                        target="_blank"
                        className={`${
                          idx !== socialMediaLogoPaths.length - 1
                            ? 'mr-4 lg:mr-10'
                            : 'mr-0'
                        }`}
                      >
                        <div className="relative w-5 lg:w-6 h-5 lg:h-6">
                          {item.icon ? (
                            item.icon
                          ) : (
                            <Image
                              src={item.src}
                              layout="fill"
                              alt="socmedicon"
                              className="object-contain object-center"
                            />
                          )}
                        </div>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="pb-10 xl:pb-16 text-xs md:text-sm xl:tracking-widest font-light text-gray-888">
          <span className="hidden md:inline">{copy_right}</span>
          {/* Mobile */}
          <span
            className="md:hidden leading-relaxed"
            dangerouslySetInnerHTML={{ __html: sanitize(copy_right_mobile) }}
          ></span>
        </p>
      </div>

      {/* Overlay */}
      <div
        className="absolute w-full h-full left-0 top-0 z-10"
        style={{
          background:
            'radial-gradient(94.56% 59.35% at 50% 49.94%, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 42.15%, rgba(0, 0, 0, 0.8) 100%)'
        }}
      ></div>

      <Image
        src={footer_background}
        alt="Footer Background"
        layout="fill"
        className="object-cover object-center grayscale opacity-25"
      />
    </footer>
  )
}
