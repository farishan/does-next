import SliderFeatured from '@/components/slider/SliderFeatured'
import useContent from '@/helpers/use-content'

export default function SectionFeatured() {
  const { featured_work_title, featured_work_description } = useContent()

  const title = featured_work_title
  const description = featured_work_description

  return (
    <section className="container py-8 md:py-16">
      <h2 className="text-2xl font-bold tracking-widest mb-4 text-center uppercase">
        {title}
      </h2>
      <p className="text-center mb-16">{description}</p>
      <SliderFeatured />
    </section>
  )
}
