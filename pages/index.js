import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import ATFHome from '@/components/ATFHome'
import Layout from '@/components/Layout'
import useContent from '@/helpers/use-content'
import SectionNext from '@/components/SectionNext'
import VerticalStepper from '@/components/VerticalStepper'
import SectionAbout from '@/components/sections/SectionAbout'
import SectionFeatured from '@/components/sections/SectionFeatured'
import SectionFeaturedLink from '@/components/sections/SectionFeaturedLink'
import SectionPress from '@/components/sections/SectionPress'
// import SectionFeaturedBlog from '@/components/sections/SectionFeaturedBlog'
import Link from 'next/link'

const BANNER_KEY = 'DOES_BANNER'

export default function Home() {
  const sectionAtfRef = useRef(null)
  const sectionBlogRef = useRef(null)
  const sectionAboutRef = useRef(null)
  const sectionWorkRef = useRef(null)
  const sectionPressRef = useRef(null)
  const [step, setStep] = useState(0)
  const { site_title, nav_blog, nav_about, nav_works } = useContent()
  const {
    section_about_title,
    section_about_linkText,
    section_about_linkHref,
    section_about_label_icon,
    section_about_label_text,
    section_about_description,
    section_about_mainImage_src,
    section_about_mainImage_alt,
    section_about_backgroundImage_src,
    section_about_backgroundImage_alt,
    section_press_title
  } = useContent('page_home')
  const [showBanner, setShowBanner] = useState(false)

  const about_link = {
    href: section_about_linkHref,
    text: section_about_linkText
  }
  const about_label = {
    icon: section_about_label_icon,
    text: section_about_label_text
  }
  const about_mainImage = {
    src: section_about_mainImage_src,
    alt: section_about_mainImage_alt
  }
  const about_backgroundImage = {
    src: section_about_backgroundImage_src,
    alt: section_about_backgroundImage_alt
  }

  /* @TODO: optimize vertical stepper code */
  const stepIndex = {
    atf: 0,
    work: 1,
    about: 2,
    blog: 3,
    press: 4
  }

  const handleNextSection = (ref, index) => {
    if (!window || !ref || ref === null) return

    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    })

    if (index || index === 0) setStep(index)
  }

  const refs = [
    sectionAtfRef,
    sectionWorkRef,
    sectionAboutRef,
    sectionBlogRef,
    sectionPressRef
  ]

  useEffect(() => {
    const listener = (e) => {
      if (window.scrollY === 0) {
        setStep(0)
      } else {
        if (window.scrollY > sectionPressRef.current.offsetTop - 20) {
          if (step !== stepIndex['press']) {
            setStep(stepIndex['press'])
          }
        } else if (window.scrollY > sectionBlogRef.current.offsetTop - 20) {
          if (step !== stepIndex['blog']) {
            setStep(stepIndex['blog'])
          }
        } else if (window.scrollY > sectionAboutRef.current.offsetTop - 20) {
          if (step !== stepIndex['about']) {
            setStep(stepIndex['about'])
          }
        } else if (window.scrollY > sectionWorkRef.current.offsetTop - 20) {
          if (step !== stepIndex['work']) {
            setStep(stepIndex['work'])
          }
        } else if (window.scrollY >= sectionAtfRef.current.offsetTop) {
          if (step !== stepIndex['atf']) {
            setStep(stepIndex['atf'])
          }
        } /* else {
          console.error(`something wrong`, step)
        } */
      }
    }

    window.addEventListener('scroll', listener)

    return () => {
      window.removeEventListener('scroll', listener)
    }

    // eslint-disable-next-line
  }, [])

  const handleCloseBanner = () => {
    localStorage.setItem(BANNER_KEY, true)
    setShowBanner(false)
  }

  useEffect(() => {
    if (!localStorage.getItem(BANNER_KEY)) {
      setShowBanner(true)
    }
  }, [])

  return (
    <Layout>
      <Head>
        <title>{site_title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Floating vertical stepper navigation */}
      <div className="fixed z-50 hidden lg:block right-16 top-1/2 -translate-y-1/2">
        <VerticalStepper
          active={step}
          onClick={(index) => handleNextSection(refs[index], index)}
          steps={Object.keys(stepIndex)}
        />
      </div>

      <div className="relative" ref={sectionAtfRef}>
        <ATFHome />
        <div className="absolute w-full bottom-4 justify-center z-40">
          {/* <SectionNext onClick={() => handleNextSection(sectionWorkRef)}> */}
          <SectionNext onClick={() => handleNextSection(sectionWorkRef)}>
            {nav_works}
          </SectionNext>
        </div>
      </div>

      {/* Modular, adjustable sections */}
      <div className="relative md:pb-24" ref={sectionWorkRef}>
        <SectionFeatured />
        <div className="absolute w-full bottom-4 justify-center z-40 hidden md:flex">
          <SectionNext onClick={() => handleNextSection(sectionAboutRef)}>
            {nav_about}
          </SectionNext>
        </div>
      </div>

      <div className="relative" ref={sectionAboutRef}>
        <SectionAbout
          backgroundImage={about_backgroundImage}
          title={section_about_title}
          mainImage={about_mainImage}
          description={section_about_description}
          link={about_link}
          label={about_label}
        />
        <div className="absolute w-full bottom-4 flex justify-center z-40">
          <SectionNext onClick={() => handleNextSection(sectionBlogRef)}>
            {nav_blog}
          </SectionNext>
        </div>
      </div>

      {/* <div ref={sectionBlogRef} className="relative">
        <SectionFeaturedBlog />
      </div> */}

      <div ref={sectionBlogRef} className="relative">
        <SectionFeaturedLink />
      </div>

      <div ref={sectionPressRef} className="relative flex">
        <SectionPress title={section_press_title} />
      </div>

      {showBanner && (
        <div className="fixed bottom-4 right-4 px-4 py-2 bg-black shadow-2xl text-white z-header flex justify-between">
          <div className="pr-4">
            <p className="font-bold mb-2">GELORA</p>
            <p className="text-sm mb-2">Anniversary Exhibition</p>
            <Link href="/campaign">
              <a className="underline text-primary hover:no-underline text-sm">
                Read more
              </a>
            </Link>
          </div>
          <div>
            <button onClick={handleCloseBanner}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ minWidth: '14px' }}
              >
                <path d="M13 1L1 13" stroke="#FFFFFF" strokeWidth="2" />
                <path d="M13 13L1 0.999999" stroke="#FFFFFF" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </Layout>
  )
}
