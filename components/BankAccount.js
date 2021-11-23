import Image from 'next/image'
import { BLUR_IMAGE } from '@/constants'
import IconCopy from './icons/IconCopy'
import { useState } from 'react'

export default function BankAccount({
  label,
  name,
  logo,
  accountNumber,
  description
}) {
  const [showCopied, setShowCopied] = useState(false)
  const copy = (content) => {
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(content)
    setShowCopied(true)
    setTimeout(() => {
      setShowCopied(false)
    }, 1500)
  }

  return (
    <>
      <div>
        <p className="text-xl">{label}</p>
        <div className="flex flex-wrap md:flex-nowrap items-center mt-5">
          <div className="relative mr-4 md:mr-10">
            <Image
              src={logo}
              alt={name}
              width={209}
              height={147}
              placeholder="blur"
              blurDataURL={BLUR_IMAGE}
            />
          </div>
          <div>
            <p className="text-xl">{name}</p>
            <div className="flex items-center relative">
              <span className="text-3xl md:text-5xl my-2 mr-6">
                {accountNumber}
              </span>
              <button
                className="cursor-pointer"
                onClick={() => copy(accountNumber)}
              >
                <IconCopy />
              </button>
              {showCopied && (
                <p className="absolute w-full h-full flex items-center bg-black text-white">
                  Copied!
                </p>
              )}
            </div>
            <div className="text-xl font-light">{description}</div>
          </div>
        </div>
      </div>
    </>
  )
}
