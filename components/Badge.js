const Badge = ({ text }) => {
  return (
    <div>
      <div className="font-body w-max px-5 py-1 rounded-2xl border bg-opacity-40 bg-red-700 border-red-700">
        {text}
      </div>
    </div>
  )
}

export default Badge
