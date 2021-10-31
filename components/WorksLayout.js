import { useRouter } from 'next/router'
import Layout from './Layout'
import ATF from './ATF'
import Head from 'next/head'
import useContent from '@/helpers/use-content'
import TabNav from './TabNav'

const WorksLayout = ({ children, headTitle }) => {
  const { site_title, works_image } = useContent()
  const router = useRouter()
  const tabItems = [
    {
      id: 1,
      label: 'Karya Unggulan',
      path: '/works/featured'
    },
    {
      id: 2,
      label: 'Karya Pendek',
      path: '/works'
    }
  ]

  const handleChangePage = (pathName) => {
    router.push(pathName)
  }

  return (
    <Layout>
      <Head>
        <title>
          {headTitle} - {site_title}
        </title>
      </Head>

      <ATF
        title="Karya Murid"
        subTitle="DOES University"
        imageURL={works_image}
      />

      <div className="container">
        <TabNav tabs={tabItems} onChange={handleChangePage} />
      </div>

      {children}
    </Layout>
  )
}

export default WorksLayout
