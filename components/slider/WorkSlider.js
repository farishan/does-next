import SectionLabel from '../sections/SectionLabel'

export default function WorkSlider() {
  return (
    <div className="p-4 w-full h-96 bg-gray-666">
      <div className="container">
        <div className="flex w-full lg:w-8/12 lg:mx-auto">
          <SectionLabel icon="profile" text="DOES GEN 7" />
          Slider goes here
        </div>
      </div>
    </div>
  )
}
