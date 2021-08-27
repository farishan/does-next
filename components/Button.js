import useContent from '@/helpers/use-content'

export default function Button({ viewMore, children }) {
  const { view_more_label } = useContent()
  const text = viewMore ? view_more_label : children

  const animationClass = 'transition-all duration-200 ease-in-out'

  return (
    <>
      <button
        className={`${animationClass} border border-transparent bg-primary py-4 px-6 text-white hover:text-primary hover:bg-black hover:border-primary`}
      >
        {text}
      </button>
    </>
  )
}
