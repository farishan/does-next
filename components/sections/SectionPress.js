import Section from './Section'
import Html from '../Html'
import useContent from '@/helpers/use-content'
import Image from 'next/image'

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

  const logo_liputan6 = {
    src: press_liputan6_src,
    alt: press_liputan6_alt
  }

  const logo_gatra = {
    src: press_gatra_com_src,
    alt: press_gatra_com_alt
  }

  const logo_kompas = {
    src: press_kompas_com_src,
    alt: press_kompas_com_alt
  }

  const logo_republika = {
    src: press_republika_src,
    alt: press_republika_alt
  }

  const logo_tribun_jogja = {
    src: press_tribun_jogja_src,
    alt: press_tribun_jogja_alt
  }

  const logo_cakrawala_susindra = {
    src: press_cakrawala_susindra_src,
    alt: press_cakrawala_susindra_alt
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
              <div key={index} className="mb-14 md:mr-10">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={220}
                  height={42}
                  // layout="fill"
                  objectFit="contain"
                />
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

export default SectionPress
