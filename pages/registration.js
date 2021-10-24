import ATF from '@/components/ATF'
import Button from '@/components/Button'
import Layout from '@/components/Layout'
import TabNav from '@/components/TabNav'
import useContent from '@/helpers/use-content'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import content from '@/content/registration.json'
import { sanitize } from 'isomorphic-dompurify'

const contentMap = {}

content.forEach((c) => {
  let id = c.section.split(' ').join('_').toLowerCase()
  c.id = id
  contentMap[id] = c
})

const tabs = content.map((c) => ({
  id: c.id,
  label: c.section
}))

export default function Registration() {
  const router = useRouter()
  const queryTab = router.query.tab
  const { site_title, nav_registration } = useContent()
  const [selectedTab, setSelectedTab] = useState(tabs[0].id)

  const move = (id) => {
    router.replace(router.pathname + '?tab=' + id)
  }

  useEffect(() => {
    if (queryTab) {
      if (queryTab !== selectedTab) {
        setSelectedTab(queryTab)
      }
    }

    // eslint-disable-next-line
  }, [queryTab])

  const handleFilter = (id) => {
    move(id)
  }

  return (
    <Layout>
      <Head>
        <title>
          {nav_registration} - {site_title}
        </title>
      </Head>

      <ATF title={nav_registration} imageURL={`/images/placeholder.png`} />

      <div className="container py-5 mb-16">
        <TabNav
          tabs={tabs}
          onChange={handleFilter}
          defaultValue={selectedTab}
          watchThis={queryTab}
        />

        <div
          className="mt-16 prose text-white max-w-none mb-8 lg:mb-12 full-image"
          dangerouslySetInnerHTML={{
            __html: sanitize(contentMap[selectedTab].content)
          }}
        ></div>

        {contentMap[selectedTab].link !== '' && (
          <a
            href={contentMap[selectedTab].link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button arrow>{contentMap[selectedTab].link_text}</Button>
          </a>
        )}
      </div>
    </Layout>
  )
}
