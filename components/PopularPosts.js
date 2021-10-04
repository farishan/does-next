import Image from 'next/image'
import Link from 'next/link'
import DateLabel from './DateLabel'
import LinkArrow from './LinkArrow'

const BigCard = () => {
  return (
    <>
      <div
        className="relative flex items-end cursor-pointer"
        style={{ minHeight: '100%' }}
      >
        <Image
          src={`/images/placeholder.png`}
          alt="placeholder"
          layout="fill"
          className="absolute object-cover"
        />
        <div
          className="absolute w-full h-full"
          style={{
            background:
              'linear-gradient(0.28deg, #000000 -12.83%, rgba(0, 0, 0, 0) 91.09%)'
          }}
        ></div>
        <div className="p-5 lg:p-10 relative z-10">
          <h2 className="text-2xl lg:text-3xl font-bold mb-2">
            <Link href="/blog">
              <a className="text-white hover:underline hover:text-white">
                Sharing Ilmu Tentang Sistem Manajemen Bersama Erix Soekamti
              </a>
            </Link>
          </h2>
          <DateLabel extendClass="mb-6">3 Maret 2021</DateLabel>
          <p className="mb-8">
            Setelah lama sekali tidak menerima kunjungan, akhirnya hari ini
            kampus DOES sudah bisa menerima tamu lagi. .{' '}
          </p>
          <Link href="/blog">
            <a>
              <LinkArrow>Selengkapnya</LinkArrow>
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}

const SmallCard = () => {
  const link = '/'
  return (
    <>
      <div className="flex -mx-2 lg:-mx-5">
        <div className="px-2 lg:px-5 w-auto">
          <Link href={link}>
            <a>
              <div className="w-32 md:w-64 h-32 md:h-64 relative">
                <Image
                  src={`/images/placeholder.png`}
                  alt="placeholder"
                  layout="fill"
                  className="object-cover"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAARVJREFUWEfVlzEOgzAMRc3EkAGJkZn7nyRHQGwwIjEwMFG5FSqiCfk2JFAmIIn/c2xwnFlrl7IsKc9zSnnN80zDMFDWtu3CN3VdU1EUSRjGcaSmaYgdz7quW4wx7xcpIFZx1pqm6QNQVRVtB2LtxF6j7/svAO99TAiX7R+AWBA+x5wAV0Mc7aoX4CqIUEgPAc5ChMTZfhBAC4GIwwBSCFRcBIBCSMTFACEIqbgKwAehEVcD7CH4WVtHoK/AVx5Xr3lcW8T+F2Ab8+QhcCVcsiQ8EtJAiHIAEUDmbJMaBpAYlsyFACQGV+/QNUEA1JDrX4Gsfe6BBKFHGwjxkexK8VBOPOtYHsPzfZi8jcmtrdntzend7fkL2HsfP/U3Za8AAAAASUVORK5CYII="
                  placeholder="blur"
                />
              </div>
            </a>
          </Link>
        </div>
        <div className="px-2 lg:px-5 w-full">
          <h3 className="text-lg lg:text-2xl mb-3 font-semibold -mt-1 md:mt-0">
            <Link href={link}>
              <a className="text-white hover:underline hover:text-white">
                Live Accoustic di Wisata Kali Apung
              </a>
            </Link>
          </h3>
          <DateLabel extendClass="mb-4">3 Maret 2021</DateLabel>
          <p className="hidden md:block opacity-70 mb-4 text-xs lg:text-sm leading-relaxed md:leading-loose lg:leading-loose">
            Setelah lama sekali tidak menerima kunjungan, akhirnya hari ini
            kampus DOES sudah bisa menerima tamu lagi. Alhamdulillah, puji
            syukur semoga kita semua selalu dilindungi oleh-Nya.......
          </p>
          <Link href={link}>
            <a>
              <LinkArrow>Selengkapnya</LinkArrow>
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default function PopularPosts({ extendClass = '', data = [] }) {
  return (
    <>
      <div className={`flex flex-wrap -mx-5 ${extendClass}`}>
        <div className="w-full px-5 lg:w-5/12 mb-5 md:mb-10 lg:mb-0">
          <BigCard />
        </div>
        <div className="w-full px-5 lg:w-7/12">
          <div className="mb-5 md:mb-10">
            <SmallCard />
          </div>
          <div className="mb-5 md:mb-10">
            <SmallCard />
          </div>
          <div>
            <SmallCard />
          </div>
        </div>
      </div>
    </>
  )
}
