import content from '@/content.json'

export default function useContent(){
  let map = {}

  for (let index = 0; index < content.length; index++) {
    const element = content[index];
    map[element.key] = element.value
  }

  return map
}