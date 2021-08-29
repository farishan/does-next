import ATF from '@/components/ATF'
import ContactForm from '@/components/ContactForm'
import IconEmail from '@/components/icons/IconEmail'
import IconMarker from '@/components/icons/IconMarker'
import IconPhone from '@/components/icons/IconPhone'
import Layout from '@/components/Layout'
import useContent from '@/helpers/use-content'
import Head from 'next/head'

export default function Contact() {
  const {
    site_title,
    atf_contact,
    contact_description,
    site_address,
    site_phone,
    site_phone_alt,
    site_email,
    site_latlong
  } = useContent()

  const latlong = site_latlong ? site_latlong.split(', ') : false
  const lat = latlong[0]
  const long = latlong[1]

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

          <div className="w-full lg:w-5/12 lg:ml-auto px-4">
            {latlong && (
              <div className="mb-10 lg:mb-20">
                <h2 className="lg:text-2xl uppercase mb-4 lg:mb-12">
                  Peta Lokasi
                </h2>
                <iframe
                  width="456"
                  height="456"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  src={`https://maps.google.com/maps?q=${lat},${long}&z=18&output=embed`}
                  className="w-full mb-8"
                ></iframe>
              </div>
            )}

            {site_address && (
              <div className="mb-6 lg:mb-12 flex">
                <IconMarker />
                <div className="ml-4">
                  <h2 className="lg:text-2xl uppercase mb-4 lg:mb-6">Alamat</h2>
                  <p className="lg:text-xl font-light">{site_address}</p>
                </div>
              </div>
            )}
            {(site_phone || site_phone_alt) && (
              <div className="mb-6 lg:mb-12 flex">
                <IconPhone />
                <div className="ml-4">
                  <h2 className="lg:text-2xl uppercase mb-4 lg:mb-6">
                    Telepon
                  </h2>
                  {site_phone && (
                    <p className="lg:text-xl font-light">{site_phone}</p>
                  )}
                  {site_phone_alt && (
                    <p className="lg:text-xl font-light">{site_phone_alt}</p>
                  )}
                </div>
              </div>
            )}
            {site_email && (
              <div className="mb-6 lg:mb-12 flex">
                <IconEmail />
                <div className="ml-4">
                  <h2 className="lg:text-2xl uppercase mb-4 lg:mb-6">Email</h2>
                  <p className="lg:text-xl font-light">
                    <a
                      href={`mailto:${site_email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white"
                    >
                      {site_email}
                    </a>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}
