import WorkItem from './WorkItem'

export default function WorkItems({ data = [] }) {
  if (data.length === 0) return <></>

  return (
    <>
      <div className="flex flex-wrap -mx-4 justify-center">
        {data.map((d, index) => (
          <div
            className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4"
            key={`WorkItem#${index}`}
          >
            <WorkItem data={d} />
          </div>
        ))}
      </div>
    </>
  )
}
