import ATF from '@/components/ATF'
import Layout from '@/components/Layout'
import WorkItems from '@/components/WorkItems'
import useContent from '@/helpers/use-content'
import Head from 'next/head'

/* @todo: get real data, setup state manager (store) */
import works from '@/assets/works.dummy.json'

export default function Works() {
  const { site_title, nav_works, works_image } = useContent()

  return (
    <Layout>
      <Head>
        <title>
          {nav_works} - {site_title}
        </title>
      </Head>

      <ATF title={nav_works} imageURL={works_image} />

      <div className="container py-10 md:py-20">
        <WorkItems data={works} />
      </div>
    </Layout>
  )
}
