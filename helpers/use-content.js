import global from '@/content/global.json'
import page_home from '@/content/page_home.json'
import about from '@/content/about.json'
import contact from '@/content/contact.json'

const contentMap = {
  global,
  page_home,
  about,
  contact
}

export default function useContent(key = 'global') {
  let map = {}

  // Get targeted JSON file, default to 'global'
  const elements = contentMap[key]

  // Convert array of key-value pairs to single object
  for (let index = 0; index < elements.length; index++) {
    const element = elements[index]
    map[element.key] = element.value
  }

  return map
}
