import WorkItems from '@/components/WorkItems'
import useContent from '@/helpers/use-content'
import WorksLayout from '@/components/WorksLayout'
import SectionHighlight from '@/components/sections/SectionHighlight'

/* @todo: get real data, setup state manager (store) */
import works from '@/assets/works.dummy.json'
const featuredWorks = works.filter((work) => work.featured)

export default function Works() {
  const { site_title, works_image, featured_work_title } = useContent()

  return (
    <WorksLayout headTitle={featured_work_title}>
      <SectionHighlight />
    </WorksLayout>
  )
}
