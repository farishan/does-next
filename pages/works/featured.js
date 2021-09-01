import ATF from '@/components/ATF'
import Layout from '@/components/Layout'
import WorkItems from '@/components/WorkItems'
import useContent from '@/helpers/use-content'
import Head from 'next/head'

/* @todo: get real data, setup state manager (store) */
import works from '@/assets/works.dummy.json'
const featuredWorks = works.filter((work) => work.featured)

export default function Featured() {
  const { site_title, works_image, featured_work_title } = useContent()

  return (
    <Layout>
      <Head>
        <title>
          {featured_work_title} - {site_title}
        </title>
      </Head>

      <ATF title={featured_work_title} imageURL={works_image} />

      <div className="container py-10 md:py-20">
        <WorkItems data={featuredWorks} />
      </div>
    </Layout>
  )
}
