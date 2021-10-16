import BigCard from '@/components/post/BigCard'
import SmallCards from '@/components/post/SmallCards'
import { POPULAR_POST_LENGTH } from '@/constants'
import PostCards from './PostCards'

export default function PopularPosts({ extendClass = '', data }) {
  if (!data || data === null || data.length < POPULAR_POST_LENGTH) return <></>

  return (
    <>
      {/* Desktop */}
      <div className={`hidden lg:flex flex-wrap -mx-5 ${extendClass}`}>
        <div className="w-full px-5 lg:w-5/12 mb-5 md:mb-10 lg:mb-0">
          <BigCard data={data[0]} />
        </div>
        <div className="w-full px-5 lg:w-7/12">
          <SmallCards data={data} />
        </div>
      </div>

      {/* Mobile-Tablet */}
      <PostCards posts={data} />
    </>
  )
}
