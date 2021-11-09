import { useRouter } from 'next/dist/client/router'
import works from '@/assets/works.dummy.json'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Video from '@/components/Video'
import IconPlayerPlay from '@/components/icons/IconPlayerPlay'
import IconPlayerPause from '@/components/icons/IconPlayerPause'
import IconPlayerVolume from '@/components/icons/IconPlayerVolume'
import IconPlayerBack from '@/components/icons/IconPlayerBack'

export default function WorkTrailer() {
  const router = useRouter()
  const { backLink } = router.query
  const slug = router.query.slug
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(1)
  const [duration, setDuration] = useState(0) // in seconds
  const [played, setPlayed] = useState(0) // in seconds
  const [showVolumeSlider, setShowVolumeSlider] = useState(false)
  const [data, setData] = useState({
    title: 'No Title',
    image: '/images/placeholder.png',
    content: '',
    entity: {},
    entity_keys: [],
    video: {}
  })

  useEffect(() => {
    /* @TODO: Fetch from /api route */
    const selected = works.find((work) => work.slug === slug)

    if (selected && selected.entity) {
      const entityKeys = Object.keys(selected.entity)
      selected.entity_keys = entityKeys
    }

    if (selected) setData(selected)
  }, [slug])

  const { video } = data

  return (
    <>
      <div className="h-screen select-none">
        <div className="absolute z-20 w-full pt-16 pointer-events-none">
          <div className="container">
            <Link href={backLink || '/'}>
              <a
                className="w-max py-4 text-white opacity-50 hover:opacity-100 pointer-events-auto flex items-center hover:text-white"
                title="Back"
              >
                <IconPlayerBack />
                <span className="ml-6">Back</span>
              </a>
            </Link>
          </div>
        </div>
        <div className="w-full h-full relative">
          <Video
            onReady={(e) => setDuration(e.getDuration())}
            url={video.embed_url}
            config={{
              youtube: {
                playerVars: { controls: 0, showinfo: 0 }
              }
            }}
            onPlay={() => (isPlaying !== true ? setIsPlaying(true) : {})}
            onPause={() => (isPlaying !== false ? setIsPlaying(false) : {})}
            onProgress={({ playedSeconds }) => setPlayed(playedSeconds)}
            playing={isPlaying}
            controls={false}
            width="100%"
            height="100%"
            volume={parseFloat(volume)}
          />
        </div>
        <div className="absolute w-full left-0 bottom-0 pb-5 md:pb-14 pointer-events-none">
          <div className="container">
            <div className="flex items-center">
              <button
                className="cursor-pointer pointer-events-auto"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <IconPlayerPause /> : <IconPlayerPlay />}
              </button>
              {showVolumeSlider && (
                <div className="absolute top-0 -mt-8 z-10 pointer-events-auto">
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                  />
                </div>
              )}
              <button
                className="ml-2 md:ml-5 cursor-pointer pointer-events-auto"
                onClick={() => setShowVolumeSlider(!showVolumeSlider)}
              >
                <IconPlayerVolume />
              </button>

              {/* Duration Bar */}
              <div
                // className={`h-4 w-full relative mx-4 md:mx-8 lg:mx-12 pointer-events-none ${
                //   isPlaying ? '' : 'opacity-0'
                // }`}
                className={`h-4 w-full relative mx-4 md:mx-8 lg:mx-12 pointer-events-none`}
                style={{ background: 'rgba(210, 41, 45, 0.2)' }}
              >
                <div
                  className="h-4 absolute left-0 w-full origin-left transition-transform duration-200"
                  style={{
                    background: '#D2292D',
                    transform: 'scaleX(' + Math.floor(played) / duration + ')'
                  }}
                ></div>
              </div>

              {/* Duration Info */}
              <div className="lg:w-2/12 flex items-center">
                {new Date(Math.floor(played) * 1000)
                  .toISOString()
                  .substr(14, 5)}
                <span className="mx-2 md:mx-6">/</span>
                {new Date(duration * 1000).toISOString().substr(14, 5)}
              </div>
            </div>
          </div>
        </div>
        {/* <iframe
          width="1440"
          height="900"
          src={video.embed_url + '?&autoplay=1'}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe> */}
      </div>
    </>
  )
}
