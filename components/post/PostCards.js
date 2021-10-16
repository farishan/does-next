import PostCard from './PostCard'

export default function PostCards({ posts }) {
  return (
    <>
      <div className="flex flex-wrap -mx-5">
        {posts &&
          posts !== null &&
          posts.map((post) => (
            <div
              key={post.slug}
              className="w-full md:w-1/2 lg:w-1/3 px-5 mb-12 lg:mb-24"
            >
              <PostCard data={post} />
            </div>
          ))}
      </div>
    </>
  )
}
