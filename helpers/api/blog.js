// import blogs from '../../assets/blogs.dummy.json'
import blogs from '../../assets/__generated-blog.dummy.json'
import blogCategories from '../../assets/blog-categories.dummy.json'

const blogHandler = {
  getAll: () => blogs.sort((a, b) => new Date(a) - new Date(b)),
  getAllCategories: () => blogCategories,
  getByCategory: (catId) =>
    catId === 'all'
      ? blogs
      : blogs.filter(
          (blog) => blog.categories && blog.categories.includes(parseInt(catId))
        )
}

export default blogHandler
