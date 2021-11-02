import ATF from '@/components/ATF'
import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'
import Layout from '@/components/Layout'
import useContent from '@/helpers/use-content'
import Head from 'next/head'

export default function Contact() {
  const { site_title, atf_contact, contact_description } = useContent()

  return (
    <Layout>
      <Head>
        <title>
          {atf_contact} - {site_title}
        </title>
      </Head>

      <ATF title={atf_contact} imageURL={`/images/placeholder.png`} />

      <div className="container py-10 md:py-20">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            {contact_description && (
              <div className="mb-8 lg:mb-16 lg:text-xl font-light">
                {contact_description}
              </div>
            )}

            <ContactForm />
          </div>

          <aside className="w-full lg:w-5/12 lg:ml-auto px-4">
            <ContactInfo />
          </aside>
        </div>
      </div>
    </Layout>
  )
}
