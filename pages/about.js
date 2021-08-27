import ATF from '@/components/ATF'
import Layout from '@/components/Layout'

export default function About() {
  return (
    <Layout>
      <ATF title={`About Page`} imageURL={`/images/placeholder.png`} />

      <div className="container py-10 md:py-20">Lorem ipsum</div>
    </Layout>
  )
}
