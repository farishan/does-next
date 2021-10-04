import { sanitize } from 'isomorphic-dompurify'

const Excerpt = ({ data }) => {
  const MAX_CHAR = 50
  const firstRichText = data.find((d) => d.type === 'rich')?.content
  const sanitized = sanitize(firstRichText)
  const content =
    sanitized.length > MAX_CHAR
      ? sanitized.substr(0, MAX_CHAR) + '...'
      : sanitized

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  )
}

Excerpt.displayName = 'Excerpt'
export default Excerpt
