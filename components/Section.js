export default function Section({
  fullscreen,
  container,
  extendClass = '',
  backgroundImage,
  overlay,
  style,
  children,
  ...props
}) {
  /*
    Do not add any spacing (padding & margin) on this component.
    Add on children instead.
  */
  const baseClass = 'relative'
  const stateClass = `${fullscreen ? 'min-h-screen' : ''}`
  const className = `${baseClass} ${stateClass} ${extendClass}`
  const finalStyle = {
    background: backgroundImage
      ? `url(${backgroundImage}) no-repeat center center`
      : null,
    ...style
  }

  return (
    <section className={className} style={finalStyle} {...props}>
      {overlay && (
        <div
          className="absolute w-full h-full left-0 top-0"
          style={{
            background:
              'radial-gradient(60.55% 60.55% at 50% 49.94%, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 36.76%, rgba(0, 0, 0, 0.8) 100%)'
          }}
        ></div>
      )}
      <div className={`relative z-10 ${container ? 'container' : ''}`}>
        {children}
      </div>
    </section>
  )
}
