import Link from 'next/link'

const ExternalLinkDirection = ({ url, children }) => {
  return (
    <Link href={url}>
      <a target="_blank">{children}</a>
    </Link>
  )
}

export default ExternalLinkDirection
