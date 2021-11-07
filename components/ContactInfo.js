import ContactMap from '@/components/ContactMap'
import IconEmail from '@/components/icons/IconEmail'
import IconMarker from '@/components/icons/IconMarker'
import IconPhone from '@/components/icons/IconPhone'
import useContent from '@/helpers/use-content'

export default function ContactInfo() {
  const {
    site_address,
    site_phone,
    site_phone_alt,
    site_email,
    site_latlong,
    label_map_title,
    label_address,
    label_phone
  } = useContent()

  const latlong = site_latlong ? site_latlong.split(', ') : false
  const lat = latlong[0]
  const long = latlong[1]

  return (
    <>
      {latlong && (
        <div className="mb-10 lg:mb-20">
          <ContactMap
            title={label_map_title}
            embedURL={`https://maps.google.com/maps?q=${lat},${long}&z=18&output=embed`}
          />
        </div>
      )}

      {site_address && (
        <div className="mb-6 lg:mb-12 flex">
          <IconMarker />
          <div className="ml-4">
            <h2 className="lg:text-2xl uppercase mb-4 lg:mb-6">
              {label_address}
            </h2>
            <p className="lg:text-xl font-light">{site_address}</p>
          </div>
        </div>
      )}
      {(site_phone || site_phone_alt) && (
        <div className="mb-6 lg:mb-12 flex">
          <IconPhone />
          <div className="ml-4">
            <h2 className="lg:text-2xl uppercase mb-4 lg:mb-6">
              {label_phone}
            </h2>
            {site_phone && (
              <p className="lg:text-xl font-light">{site_phone}</p>
            )}
            {site_phone_alt && (
              <p className="lg:text-xl font-light">{site_phone_alt}</p>
            )}
          </div>
        </div>
      )}
      {site_email && (
        <div className="mb-6 lg:mb-12 flex">
          <IconEmail />
          <div className="ml-4">
            <h2 className="lg:text-2xl uppercase mb-4 lg:mb-6">Email</h2>
            <p className="lg:text-xl font-light">
              <a
                href={`mailto:${site_email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                {site_email}
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  )
}
