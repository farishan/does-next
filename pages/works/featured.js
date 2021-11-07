import { useEffect, useState } from 'react'
import WorkItems from '@/components/WorkItems'
import useContent from '@/helpers/use-content'
import WorksLayout from '@/components/WorksLayout'
import SectionHighlight from '@/components/sections/SectionHighlight'
import FeaturedWorkItem from '@/components/FeaturedWorkItem'

/* @todo: get real data, setup state manager (store) */
import works from '@/assets/works.dummy.json'
// const featuredWorks = works.filter((work) => work.featured)

export default function Featured() {
  const { site_title, works_image, featured_work_title } = useContent()
  const [generations, setGenerations] = useState([])
  const [featuredWorks, setFeaturedWorks] = useState([])

  useEffect(() => {
    getGenerations()
    getFeaturedWorks()
  }, [])

  const getGenerations = () => {
    fetch(`/api/generations`)
      .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          const reversedGenerations = res.data.reverse()
          setGenerations(reversedGenerations)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getFeaturedWorks = () => {
    fetch(`/api/works?featuredWork=true`)
      .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          setFeaturedWorks(res.data)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const renderGenerationPeriod = (gen) => {
    return (
      <div>
        <div className="font-body w-max px-5 py-1 rounded-2xl border bg-opacity-40 bg-red-700 border-red-700">
          {gen.period}
        </div>
      </div>
    )
  }

  const renderGenerationMajor = (gen) => {
    return (
      <div>
        <ul className="md:mt-5">
          {gen.majors?.map((major, index) => {
            return (
              <li
                key={index}
                className="list-disc list-inside pl-3 font-light text-gray-500"
              >
                {major}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  const renderFeaturedWorkItem = (gen) => {
    let work = {}
    featuredWorks.forEach((item) => {
      if (item.generation === gen) {
        work = item
      }
    })
    return <>{work && <FeaturedWorkItem data={work} />}</>
  }

  return (
    <WorksLayout headTitle={featured_work_title}>
      {generations?.length && featuredWorks?.length && (
        <>
          {generations.map((gen, index) => {
            return (
              <SectionHighlight
                key={index}
                title={gen.label}
                childTitle={renderGenerationPeriod(gen)}
                childTitleSecondary={renderGenerationMajor(gen)}
                childContent={renderFeaturedWorkItem(gen.name)}
              />
            )
          })}
        </>
      )}
    </WorksLayout>
  )
}
