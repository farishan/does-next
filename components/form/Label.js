export default function Label({ children, extendClass, ...props }) {
  return (
    <label className={`block lg:text-2xl ${extendClass}`} {...props}>
      {children}
    </label>
  )
}
