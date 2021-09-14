import Button from '@/components/Button'

const blog_title = 'Blog'
const blog_description = 'Our featured blogposts'

export default function SectionFeaturedBlog() {
  return (
    <section className="container py-8 md:py-16">
      <h2 className="text-2xl font-bold tracking-widest mb-4 text-center uppercase">
        {blog_title}
      </h2>
      <p className="text-center mb-16">{blog_description}</p>
      <div className="p-4 w-full h-96 bg-gray-666">
        Featured blogposts goes here
      </div>
      <div className="text-center mt-16">
        <Button viewMore />
      </div>
    </section>
  )
}
