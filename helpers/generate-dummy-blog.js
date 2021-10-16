const fs = require('fs')
const faker = require('faker/locale/id_ID')
const categories = require('../assets/blog-categories.dummy.json')
const types = [
  {
    type: 'rich',
    content:
      '<h1>HTML Ipsum Presents</h1> <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p> <h2>Header Level 2</h2> <ol> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li> </ol> <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote> <h3>Header Level 3</h3> <ul> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li> </ul> <pre><code> #header h1 a { display: block; width: 300px; height: 80px; } </code></pre>'
  },
  {
    type: 'gallery',
    images: [
      {
        src: 'https://i.ibb.co/TT3wtXh/Frame-30.jpg',
        alt: 'alt text'
      },
      {
        src: 'https://i.ibb.co/n7HGX6L/Rectangle-77.jpg',
        alt: 'alt text'
      },
      {
        src: 'https://i.ibb.co/q0m2b4h/Rectangle-78.jpg',
        alt: 'alt text'
      },
      {
        src: 'https://i.ibb.co/Q6CxCHX/Rectangle-79.jpg',
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
  let withGallery = false

  for (let index = 0; index < Math.floor(Math.random() * 3) + 1; index++) {
    const block = generateBlock(index)
    if (block.type === 'gallery') withGallery = true
    blocks.push(block)
  }

  const post = {
    id: index + 1,
    title: withGallery ? '[gallery] ' + title : title,
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
