import UnderlinedTitle from '@/components/UnderlinedTitle'

const SectionHighlight = ({
  title,
  description,
  content,
  childTitle,
  childTitleSecondary,
  childContent
}) => {
  return (
    <section className="container sm:py-10 md:py-20">
      <div className="flex sm:flex-col md:flex-row">
        <div className="sm:w-full md:w-2/5 flex sm:flex-row md:flex-col sm:justify-between md:justify-start sm:mb-10 md:mb-0">
          <div className="sm:hidden md:flex w-full flex-col">
            <UnderlinedTitle text1={title} BigText lineBold />
            <div className="mt-7">
              {childTitle}
              {childTitleSecondary}
            </div>
          </div>
          <div className="w-full flex flex-row justify-between mb-10 md:hidden">
            <div>
              <UnderlinedTitle text1={title} BigText lineBold />
              <div className="mt-5">{childTitle}</div>
            </div>
            {childTitleSecondary}
          </div>
        </div>
        <div className="sm:w-full md:w-3/5">{childContent}</div>
      </div>
    </section>
  )
}

export default SectionHighlight
