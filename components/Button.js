import useContent from '@/helpers/use-content'

export default function Button({
  viewMore,
  extendClass = '',
  children,
  ...props
}) {
  const { label_view_more } = useContent()
  const text = viewMore ? label_view_more : children

  const animationClass = 'transition-all duration-200 ease-in-out'

  return (
    <>
      <button
        className={`${animationClass} border border-transparent bg-primary py-4 px-6 text-white hover:text-primary hover:bg-black hover:border-primary ${extendClass}`}
        {...props}
      >
        {text}
      </button>
    </>
  )
}
