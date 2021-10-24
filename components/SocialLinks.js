import Image from 'next/image'
import Link from 'next/link'
import useContent from '@/helpers/use-content'
import IconSocmed from '@/components/icons/IconSocmed'

export default function SocialLinks() {
  const { site_instagram, site_youtube, site_twitter, site_facebook } =
    useContent()

  const paths = [
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
    <>
      <div className="flex">
        {paths.map((item, idx) => (
          <Link key={idx} href={item.path}>
            <a
              target="_blank"
              className={`${
                idx !== paths.length - 1
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
    </>
  )
}
