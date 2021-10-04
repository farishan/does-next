import Image from 'next/image'

export default function ATF({
  title,
  imageURL = `/images/placeholder_hero.jpg`
}) {
  return (
    <>
      <div className="py-20 lg:min-h-90vh flex items-center justify-center relative">
        <Image
          src={imageURL}
          layout="fill"
          className="object-cover"
          alt={title}
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAARVJREFUWEfVlzEOgzAMRc3EkAGJkZn7nyRHQGwwIjEwMFG5FSqiCfk2JFAmIIn/c2xwnFlrl7IsKc9zSnnN80zDMFDWtu3CN3VdU1EUSRjGcaSmaYgdz7quW4wx7xcpIFZx1pqm6QNQVRVtB2LtxF6j7/svAO99TAiX7R+AWBA+x5wAV0Mc7aoX4CqIUEgPAc5ChMTZfhBAC4GIwwBSCFRcBIBCSMTFACEIqbgKwAehEVcD7CH4WVtHoK/AVx5Xr3lcW8T+F2Ab8+QhcCVcsiQ8EtJAiHIAEUDmbJMaBpAYlsyFACQGV+/QNUEA1JDrX4Gsfe6BBKFHGwjxkexK8VBOPOtYHsPzfZi8jcmtrdntzend7fkL2HsfP/U3Za8AAAAASUVORK5CYII="
          placeholder="blur"
        />

        {title && (
          <h1 className="uppercase font-bold tracking-widest text-2xl lg:text-5xl relative z-10 text-center">
            {title}
          </h1>
        )}
      </div>
    </>
  )
}
