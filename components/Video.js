import ReactPlayer from 'react-player/youtube'

export default function Video({
  url = 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  ...props
}) {
  return <ReactPlayer url={url} {...props} />
}
