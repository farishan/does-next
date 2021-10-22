import ATF from '@/components/ATF'
import Button from '@/components/Button'
import Layout from '@/components/Layout'
import TabNav from '@/components/TabNav'
import useContent from '@/helpers/use-content'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const tabs = [
  {
    id: 'information',
    label: 'Informasi'
  },
  {
    id: 'how-to',
    label: 'Syarat dan Tata Cara'
  },
  {
    id: 'form',
    label: 'Form Pendaftaran'
  }
]

export default function Registration() {
  const router = useRouter()
  const queryTab = router.query.tab
  const { site_title, nav_registration } = useContent()
  const [selectedTab, setSelectedTab] = useState(tabs[0].id)

  const move = (id) => {
    router.replace(router.pathname + '?tab=' + id)
  }

  useEffect(() => {
    if (queryTab !== selectedTab) {
      setSelectedTab(queryTab)
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

        <div className="mt-16">
          {selectedTab === 'information' && (
            <div className="leading-loose">
              <h2 className="text-3xl font-semibold mb-12">Rundown</h2>
              <p className="mb-12 lg:text-xl">
                &nbsp; A, vulputate id nullam lectus vel, metus enim. Tempus
                volutpat ut in id at fames eget. Pulvinar quam sodales quisque
                mattis. Feugiat et tristique aliquet arcu in id rutrum et
                tellus. Id quis interdum enim velit. Id convallis sed massa a,
                risus sed. Volutpat sed integer fusce lectus quam. Justo, nec
                sed interdum ac. Bibendum et urna, vel donec. Elit sed ultricies
                lobortis massa fames eget risus. Quam auctor odio interdum
                ultrices. Sem quis praesent ac enim accumsan, orci. Ac, tortor
                at sed pharetra, porttitor eu. Sit dolor dui ipsum fringilla
                placerat tristique non quam sit. Ultricies magna pulvinar varius
                suspendisse. Pulvinar odio dolor elit mauris urna, netus ac
                felis, consectetur. Integer viverra egestas leo tortor vitae
                elementum. Tincidunt dui eget dolor tristique maecenas interdum
                vitae duis odio. Molestie venenatis fringilla aenean eget
                pellentesque duis. A proin dui lectus nibh proin ac integer
                purus mi.
              </p>
              <p className="mb-12 lg:text-xl">
                &nbsp; A, vulputate id nullam lectus vel, metus enim. Tempus
                volutpat ut in id at fames eget. Pulvinar quam sodales quisque
                mattis. Feugiat et tristique aliquet arcu in id rutrum et
                tellus. Id quis interdum enim velit. Id convallis sed massa a,
                risus sed. Volutpat sed integer fusce lectus quam. Justo, nec
                sed interdum ac. Bibendum et urna, vel donec. Elit sed ultricies
                lobortis massa fames eget risus. Quam auctor odio interdum
                ultrices. Sem quis praesent ac enim accumsan, orci. Ac, tortor
                at sed pharetra, porttitor eu. Sit dolor dui ipsum fringilla
                placerat tristique non quam sit. Ultricies magna pulvinar varius
                suspendisse. Pulvinar odio dolor elit mauris urna, netus ac
                felis, consectetur. Integer viverra egestas leo tortor vitae
                elementum. Tincidunt dui eget dolor tristique maecenas interdum
                vitae duis odio. Molestie venenatis fringilla aenean eget
                pellentesque duis. A proin dui lectus nibh proin ac integer
                purus mi.
              </p>
            </div>
          )}
          {selectedTab === 'how-to' && (
            <div className="leading-loose">
              <h2 className="text-3xl font-semibold mb-12">
                Syarat dan Tata Cara
              </h2>
              <p className="mb-12 lg:text-xl">
                &nbsp; A, vulputate id nullam lectus vel, metus enim. Tempus
                volutpat ut in id at fames eget. Pulvinar quam sodales quisque
                mattis. Feugiat et tristique aliquet arcu in id rutrum et
                tellus. Id quis interdum enim velit. Id convallis sed massa a,
                risus sed. Volutpat sed integer fusce lectus quam. Justo, nec
                sed interdum ac. Bibendum et urna, vel donec. Elit sed ultricies
                lobortis massa fames eget risus. Quam auctor odio interdum
                ultrices. Sem quis praesent ac enim accumsan, orci. Ac, tortor
                at sed pharetra, porttitor eu. Sit dolor dui ipsum fringilla
                placerat tristique non quam sit. Ultricies magna pulvinar varius
                suspendisse. Pulvinar odio dolor elit mauris urna, netus ac
                felis, consectetur. Integer viverra egestas leo tortor vitae
                elementum. Tincidunt dui eget dolor tristique maecenas interdum
                vitae duis odio. Molestie venenatis fringilla aenean eget
                pellentesque duis. A proin dui lectus nibh proin ac integer
                purus mi.
              </p>
              <p className="mb-12 lg:text-xl">
                &nbsp; A, vulputate id nullam lectus vel, metus enim. Tempus
                volutpat ut in id at fames eget. Pulvinar quam sodales quisque
                mattis. Feugiat et tristique aliquet arcu in id rutrum et
                tellus. Id quis interdum enim velit. Id convallis sed massa a,
                risus sed. Volutpat sed integer fusce lectus quam. Justo, nec
                sed interdum ac. Bibendum et urna, vel donec. Elit sed ultricies
                lobortis massa fames eget risus. Quam auctor odio interdum
                ultrices. Sem quis praesent ac enim accumsan, orci. Ac, tortor
                at sed pharetra, porttitor eu. Sit dolor dui ipsum fringilla
                placerat tristique non quam sit. Ultricies magna pulvinar varius
                suspendisse. Pulvinar odio dolor elit mauris urna, netus ac
                felis, consectetur. Integer viverra egestas leo tortor vitae
                elementum. Tincidunt dui eget dolor tristique maecenas interdum
                vitae duis odio. Molestie venenatis fringilla aenean eget
                pellentesque duis. A proin dui lectus nibh proin ac integer
                purus mi.
              </p>
            </div>
          )}
          {selectedTab === 'form' && (
            <div>
              <h2 className="text-3xl font-semibold mb-12">Form Pendaftaran</h2>
              <p className="mb-12 lg:text-xl">
                Silahkan mendaftar dengan mengisi form pendaftaran berikut
              </p>
              <a
                href="https://forms.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button arrow>Daftar Sekarang</Button>
              </a>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}
