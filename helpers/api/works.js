import works from '../../assets/works.dummy.json'

const worksHandler = {
  getAll: () => [...works],
  getByIsFeatured: (isFeatured) => {
    if (isFeatured) {
      return works.filter((work) => work.isFeatured)
    }
    return works.filter((work) => !work.isFeatured)
  }
}

export default worksHandler
