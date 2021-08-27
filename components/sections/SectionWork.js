import Slider from '@/components/slider/Slider'
import useContent from '@/helpers/use-content'
import Button from '@/components/Button'

export default function SectionWork() {
  const { work_title, work_description, view_more_label } = useContent()

  const title = work_title
  const description = work_description

  return (
    <section className="container py-8 md:py-16">
      <h2 className="text-2xl font-bold tracking-widest mb-4 text-center uppercase">
        {title}
      </h2>
      <p className="text-center mb-16">{description}</p>

      <Slider />

      <div className="text-center mt-16">
        <Button viewMore />
      </div>
    </section>
  )
}
