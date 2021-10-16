export default function SectionNext({ children, ...props }) {
  return (
    <div
      className="flex flex-col items-center cursor-pointer select-none"
      {...props}
    >
      <div className="rounded-full border border-white border-opacity-30 h-10 w-10 flex items-center justify-center mb-2">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ minWidth: '24px' }}
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <p className="text-sm leading-loose font-light">{children}</p>
    </div>
  )
}
