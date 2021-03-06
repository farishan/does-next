import WorkSlider from '@/components/slider/WorkSlider'
import useContent from '@/helpers/use-content'

export default function SectionFeatured() {
  const { nav_works } = useContent()

  const title = nav_works

  return (
    <section className="py-10 md:pt-16 md:pb-12">
      <div className="container mb-10 md:mb-12">
        <div className="flex items-center">
          <div>
            <h2 className="md:text-xl mr-4 md:mr-10 tracking-widest">
              {title}
            </h2>
          </div>
          <div className="w-full">
            <hr className="border-white opacity-50" />
          </div>
        </div>
      </div>

      <WorkSlider />
    </section>
  )
}
