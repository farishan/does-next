import Image from 'next/image'
import Link from 'next/link'

const placeholder = {
  title: 'No Title',
  thumbnail: '/images/placeholder.png',
  description: '',
  date: '',
  slug: ''
}

export default function WorkItem({ data = placeholder }) {
  const { title, thumbnail, description, date, slug } = data

  return (
    <>
      <div className="text-center">
        <Link href={`/works/${slug}`}>
          <a>
            <Image src={thumbnail} alt={title} width="359px" height="550px" />
          </a>
        </Link>
        <Link href={`/works/${slug}`}>
          <a className="text-white hover:text-white hover:underline">
            <p>{title}</p>
          </a>
        </Link>
        <p>{description}</p>
        <p>{date}</p>
      </div>
    </>
  )
}
