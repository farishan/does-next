import { sanitize } from 'isomorphic-dompurify'

const SectionRichText = ({ content }) => {
  return (
    <>
      <div
        className="prose lg:prose-xl prose-white text-white max-w-none"
        dangerouslySetInnerHTML={{ __html: sanitize(content) }}
      ></div>
    </>
  )
}

SectionRichText.displayName = 'SectionRichText'
export default SectionRichText
