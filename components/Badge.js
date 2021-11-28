const Badge = ({ text }) => {
  return (
    <div>
      <div className="font-light w-max px-6 py-2 rounded-3xl border bg-opacity-20 bg-primary border-primary">
        {text}
      </div>
    </div>
  )
}

export default Badge
