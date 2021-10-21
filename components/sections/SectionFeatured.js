import WorkSlider from '@/components/slider/WorkSlider'
import useContent from '@/helpers/use-content'
import Button from '../Button'

export default function SectionFeatured() {
  const { nav_works } = useContent()

  const title = nav_works

  return (
    <section className="py-8 md:pt-16 md:pb-12">
      <div className="container">
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

      <div className="flex justify-center">
        <Button arrow>Lihat Detail</Button>
      </div>
    </section>
  )
}
