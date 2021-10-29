import ATF from '@/components/ATF'
import Layout from '@/components/Layout'
import TabNav from '@/components/TabNav'
import { BLUR_IMAGE } from '@/constants'
import useContent from '@/helpers/use-content'
import { sanitize } from 'isomorphic-dompurify'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import majors from '@/content/majors.json'

export default function About() {
  const {
    atf_background,
    title,
    information_content,
    donation_label,
    donation_bank,
    donation_account_number,
    donation_bank_logo,
    donation_description,
    contact_content,
    major_content
  } = useContent('about')
  const router = useRouter()
  const { site_title } = useContent()
  const tabs = useMemo(
    () => [
      {
        id: 'information',
        label: 'Informasi'
      },
      {
        id: 'donation',
        label: 'Donasi'
      },
      {
        id: 'contact',
        label: 'Kontak'
      },
      {
        id: 'major',
        label: 'Jurusan'
      }
    ],
    []
  )
  const [selectedTab, setSelectedTab] = useState(/* string */ null)

  useEffect(() => {
    /* If tab is not provided, fallback */
    if (
      (!router.query.tab || router.query.tab === null) &&
      selectedTab !== tabs[0].id
    ) {
      setSelectedTab(tabs[0].id)
      return
    }

    if (router.query.tab && router.query.tab !== selectedTab) {
      setSelectedTab(router.query.tab)
    }
  }, [router, tabs, selectedTab])

  const handleNav = (id) => {
    router.push({
      pathname: '/about',
      query: {
        tab: id
      }
    })
  }

  return (
    <Layout>
      <Head>
        <title>
          {title} - {site_title}
        </title>
      </Head>

      <ATF title={title} imageURL={atf_background} />

      {selectedTab !== null && (
        <div className="container py-1 md:py-5">
          <TabNav
            tabs={tabs}
            defaultValue={selectedTab}
            onChange={handleNav}
            watchThis={selectedTab}
          />
          <div className="mt-6 md:mt-16 mb-12 md:mb-24">
            {selectedTab === 'information' && (
              <>
                <div
                  className="prose prose-sm md:prose-xl max-w-none full-image"
                  dangerouslySetInnerHTML={{
                    __html: sanitize(information_content)
                  }}
                ></div>
              </>
            )}
            {selectedTab === 'donation' && (
              <>
                <div>
                  <p>{donation_label}</p>
                  <p>{donation_bank}</p>
                  <Image
                    src={donation_bank_logo}
                    alt={donation_bank}
                    width={209}
                    height={147}
                    placeholder="blur"
                    blurDataURL={BLUR_IMAGE}
                  />
                  <p>{donation_account_number}</p>
                  <p>{donation_description}</p>
                </div>
              </>
            )}
            {selectedTab === 'contact' && (
              <>
                <div>{contact_content}</div>
              </>
            )}
            {selectedTab === 'major' && (
              <>
                <div>{major_content}</div>
                <div>
                  {majors.map((major) => (
                    <div key={major.name} className="my-8">
                      <p>{major.name}</p>
                      <p>{major.generations}</p>
                      <p>{major.description}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </Layout>
  )
}
