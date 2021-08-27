import ATF from '@/components/ATF'
import Layout from '@/components/Layout'
import useContent from '@/helpers/use-content'
import Head from 'next/head'

export default function Contact() {
  const { site_title, atf_contact } = useContent()

  return (
    <Layout>
      <Head>
        <title>
          {atf_contact} - {site_title}
        </title>
      </Head>

      <ATF title={atf_contact} imageURL={`/images/placeholder.png`} />

      <div className="container py-10 md:py-20">Lorem ipsum</div>
    </Layout>
  )
}
