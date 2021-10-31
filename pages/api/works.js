import worksHandler from '../../helpers/api/works'

export default function worksAPI(req, res) {
  const { featuredWork } = req.query
  let works = []

  if (featuredWork || (!featuredWork && featuredWork === false)) {
    works = worksHandler.getByIsFeatured(featuredWork ? true : false)
  } else {
    works = worksHandler.getAll()
  }

  res.status(200).json({ data: works })
}
