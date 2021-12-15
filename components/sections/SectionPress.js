import Section from './Section'
import Html from '../Html'
import useContent from '@/helpers/use-content'
import Image from 'next/image'
import ExternalLinkDirection from '../ExternalLinkDirection'

const SectionPress = ({ title }) => {
  const {
    press_liputan6_src,
    press_liputan6_alt,
    press_gatra_com_src,
    press_gatra_com_alt,
    press_kompas_com_src,
    press_kompas_com_alt,
    press_republika_src,
    press_republika_alt,
    press_tribun_jogja_src,
    press_tribun_jogja_alt,
    press_cakrawala_susindra_src,
    press_cakrawala_susindra_alt
  } = useContent()

  /* @TODO: change logos and URLs to be more generic & dynamic.
  No specific brand on this component. */
  const logo_liputan6 = {
    src: press_liputan6_src,
    alt: press_liputan6_alt,
    url: 'https://www.liputan6.com/showbiz/read/3265875/erix-soekamti-punya-11-mahasiswa-di-does-university'
  }

  const logo_gatra = {
    src: press_gatra_com_src,
    alt: press_gatra_com_alt,
    url: 'https://www.gatra.com/detail/news/273837-erix-soekamti-does-university-wujudkan-universitas-gratis-cetak-insan-kreatif-dan-inovatif'
  }

  const logo_kompas = {
    src: press_kompas_com_src,
    alt: press_kompas_com_alt,
    url: 'https://www.kompas.com/tren/read/2020/03/04/121500565/di-balik-layar-viralnya-padar-film-animasi-karya-anak-bangsa'
  }

  const logo_republika = {
    src: press_republika_src,
    alt: press_republika_alt,
    url: 'https://www.republika.co.id/berita/telko-highlight/berita-telkom/17/07/14/ot1yr3368-does-university-sekolah-gratis-cetak-insan-kreatif'
  }

  const logo_tribun_jogja = {
    src: press_tribun_jogja_src,
    alt: press_tribun_jogja_alt,
    url: 'https://jogja.tribunnews.com/2016/01/28/does-university-sekolah-gratis-calon-animator'
  }

  const logo_cakrawala_susindra = {
    src: press_cakrawala_susindra_src,
    alt: press_cakrawala_susindra_alt,
    url: 'https://www.susindra.com/2020/10/daftar-ke-does-university-yuuuk.html'
  }

  const pressLogos = [
    logo_liputan6,
    logo_gatra,
    logo_kompas,
    logo_republika,
    logo_tribun_jogja,
    logo_cakrawala_susindra
  ]

  return (
    <Section extendClass="pb-20 lg:pt-32 lg:pb-32">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-4xl lg:text-7xl lg:w-10/12 xl:w-full xl:text-8xl mb-14 md:mb-16 flex justify-center">
          <Html inline>{title}</Html>
        </h1>
        <div className="flex justify-center items-center flex-wrap w-3/4">
          {pressLogos.map((logo, index) => {
            return (
              <ExternalLinkDirection url={logo.url} key={logo.src + index}>
                <div className="mb-14 md:mr-10">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={220}
                    height={42}
                    // layout="fill"
                    objectFit="contain"
                  />
                </div>
              </ExternalLinkDirection>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

export default SectionPress
