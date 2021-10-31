import UnderlinedTitle from '@/components/UnderlinedTitle'

const SectionHighlight = ({
  title,
  description,
  content,
  childTitle,
  childContent
}) => {
  return (
    <section className="container sm:py-10 md:py-20">
      <div className="flex sm:flex-col md:flex-row">
        <div className="sm:w-full md:w-2/5 flex sm:flex-row md:flex-col sm:justify-between md:justify-start sm:mb-10 md:mb-0">
          <UnderlinedTitle text1={title} BigText lineBold />
          {childTitle}
        </div>
        <div className="sm:w-full md:w-3/5">{childContent}</div>
      </div>
    </section>
  )
}

export default SectionHighlight
