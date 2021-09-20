import Head from 'next/head'
import ATF from '@/components/ATF'
import Layout from '@/components/Layout'
import VerticalStepper from '@/components/VerticalStepper'
import useContent from '@/helpers/use-content'
import SectionWork from '@/components/sections/SectionWork'
import SectionAbout from '@/components/sections/SectionAbout'
import SectionFeatured from '@/components/sections/SectionFeatured'
import SectionFeaturedBlog from '@/components/sections/SectionFeaturedBlog'
import TabNav from '@/components/TabNav'

export default function Home() {
  const { site_title } = useContent()
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
    section_about_backgroundImage_alt
  } = useContent('page_home')

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

  return (
    <Layout>
      <Head>
        <title>{site_title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ATF />

      {/* Floating vertical stepper navigation */}
      {/* TODO integrate vertical stepper with sections */}
      <div className="fixed z-40 hidden lg:block right-16 top-1/2 -translate-y-1/2">
        <VerticalStepper />
      </div>

      <div className="container">
        <TabNav />
      </div>

      {/* Modular, adjustable sections */}
      <SectionFeatured />
      <SectionWork />
      <SectionAbout
        backgroundImage={about_backgroundImage}
        title={section_about_title}
        mainImage={about_mainImage}
        description={section_about_description}
        link={about_link}
        label={about_label}
      />
      <SectionFeaturedBlog />
    </Layout>
  )
}
