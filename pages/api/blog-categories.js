import blogHandler from '@/helpers/api/blog'

const categories = blogHandler.getAllCategories()

export default function blogAPI(req, res) {
  res.status(200).json({ data: categories })
}
