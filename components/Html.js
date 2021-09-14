/* HOC for rendering sanitized HTML */

import { sanitize } from 'isomorphic-dompurify'

export default function Html({ inline, block, children }) {
  return inline ? (
    <span dangerouslySetInnerHTML={{ __html: sanitize(children) }} />
  ) : block ? (
    <div dangerouslySetInnerHTML={{ __html: sanitize(children) }} />
  ) : (
    sanitize(children)
  )
}
