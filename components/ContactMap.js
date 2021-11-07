export default function ContactMap({ title = 'Location Map', embedURL }) {
  if (!embedURL) return <></>

  return (
    <>
      <div>
        <h2 className="lg:text-2xl uppercase mb-4 lg:mb-12">{title}</h2>
        <iframe
          width="456"
          height="456"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          src={embedURL}
          className="w-full mb-8"
        ></iframe>
      </div>
    </>
  )
}
