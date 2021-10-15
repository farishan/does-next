import SmallCard from './SmallCard'

const SmallCards = ({ data }) => {
  return data.map(
    (d, index) =>
      index > 0 &&
      index < 4 && (
        <div
          key={d.id}
          className={`${index === data.length - 1 ? '' : 'mb-5 md:mb-10'} `}
        >
          <SmallCard data={d} />
        </div>
      )
  )
}

SmallCards.displayName = 'SmallCards'
export default SmallCards
