const fs = require('fs')
const faker = require('faker/locale/id_ID')
const categories = require('../assets/blog-categories.dummy.json')
const types = [
  {
    type: 'rich',
    content:
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada amet, enim convallis platea feugiat venenatis venenatis, risus massa. Nisl lectus a turpis neque pulvinar fermentum, tristique sit nibh. Hac egestas tristique eu nisl platea sapien sit. Purus consectetur elementum, posuere placerat id non luctus a felis. Amet, justo, duis nulla netus ullamcorper. Vel etiam vulputate sollicitudin elementum. Vestibulum consequat nulla sit scelerisque risus quis aliquet massa. Est habitant consectetur penatibus interdum odio in at odio ornare. Integer enim, sed ornare mauris nunc lacus mauris nisi. Dui risus elit volutpat quisque tortor vitae risus. Proin ultricies diam et, volutpat eget. Adipiscing sagittis, dignissim velit tempus sagittis ligula laoreet. Quis sollicitudin vestibulum fermentum morbi eu. Tincidunt consequat aenean phasellus ultrices. Mauris, quis hac ornare justo, sagittis, tellus sed. Vitae amet ut facilisi laoreet semper. A, vulputate id nullam lectus vel, metus enim. Tempus volutpat ut in id at fames eget. Pulvinar quam sodales quisque mattis. Feugiat et tristique aliquet arcu in id rutrum et tellus. Id quis interdum enim velit. Id convallis sed massa a, risus sed. Volutpat sed integer fusce lectus quam. Justo, nec sed interdum ac. Bibendum et urna, vel donec. Elit sed ultricies lobortis massa fames eget risus. Quam auctor odio interdum ultrices. Sem quis praesent ac enim accumsan, orci. Ac, tortor at sed pharetra, porttitor eu. Sit dolor dui ipsum fringilla placerat tristique non quam sit. Ultricies magna pulvinar varius suspendisse. Pulvinar odio dolor elit mauris urna, netus ac felis, consectetur. Integer viverra egestas leo tortor vitae elementum. Tincidunt dui eget dolor tristique maecenas interdum vitae duis odio. Molestie venenatis fringilla aenean eget pellentesque duis. A proin dui lectus nibh proin ac integer purus mi.</p>'
  },
  {
    type: 'gallery',
    images: [
      {
        src: 'https://i.ibb.co/30pjWJX/erix-2-1.png',
        alt: 'alt text'
      },
      {
        src: 'https://i.ibb.co/30pjWJX/erix-2-1.png',
        alt: 'alt text'
      },
      {
        src: 'https://i.ibb.co/30pjWJX/erix-2-1.png',
        alt: 'alt text'
      },
      {
        src: 'https://i.ibb.co/30pjWJX/erix-2-1.png',
        alt: 'alt text'
      }
    ]
  }
]

function getRandomCategory() {
  return categories[Math.floor(Math.random() * categories.length)].id
}

function generateBlock(index) {
  const type = types[Math.floor(Math.random() * types.length)]
  return {
    id: index + 1,
    ...type
  }
}

function generateDummyBlog(index) {
  const title = faker.lorem.sentence(5)
  const blocks = []

  for (let index = 0; index < Math.floor(Math.random() * 3) + 1; index++) {
    const block = generateBlock(index)
    blocks.push(block)
  }

  const post = {
    id: index + 1,
    title,
    slug: faker.helpers.slugify(title.toLowerCase()),
    date: faker.date.past(),
    excerpt: faker.lorem.sentence(25),
    featured_image: faker.image.nature(272, 272),
    thumbnail: {
      src: faker.image.nature(272, 272),
      alt: title
    },
    categories: [getRandomCategory()],
    blocks
  }

  return post
}

function generateDummyBlogs(length = 10) {
  let posts = []

  for (let index = 0; index < length; index++) {
    posts.push(generateDummyBlog(index))
  }

  return posts
}

const posts = generateDummyBlogs(10)

fs.writeFile(
  './assets/__generated-blog.dummy.json',
  JSON.stringify(posts, null, 2),
  (err) => {
    if (err) {
      console.error(err)
      return
    }
    console.log('Dummy blog generated successfully.')
  }
)
