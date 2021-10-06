import blogHandler from '@/helpers/api/blog'

const DEFAULT_LIMIT = 6

export default function blogAPI(req, res) {
  const { limit: limitStr, offset: offsetStr, categoryId } = req.query

  const limit = limitStr ? parseInt(limitStr) : -1
  const offset = offsetStr ? parseInt(offsetStr) : -1

  const blogs = categoryId
    ? blogHandler.getByCategory(categoryId)
    : [...blogHandler.getAll()]

  let data = []

  if (limit && limit > -1 && offset && offset > -1) {
    data = blogs.slice(offset, offset + limit)
  } else if (limit && limit > -1) {
    data = blogs.slice(0, limit)
  } else if (offset && offset > -1) {
    data = blogs.slice(offset, offset + DEFAULT_LIMIT)
  } else {
    data = data = blogs.slice(0, offset + DEFAULT_LIMIT)
  }

  res
    .status(200)
    .json({ data: data, next: offset + DEFAULT_LIMIT < blogs.length })
}
