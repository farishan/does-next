import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import styles from './Modal.module.css'

export default function Modal({ onClose, noClose, ...props }) {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  const handleCloseClick = (e) => {
    e.preventDefault()
    if (!noClose) onClose()
  }

  if (isBrowser) {
    return ReactDOM.createPortal(
      <ModalContent onClose={handleCloseClick} noClose={noClose} {...props} />,
      document.getElementById('modal-root')
    )
  } else {
    return null
  }
}

const ModalContent = ({
  show,
  onClose,
  width = '70vw',
  height = '70vh',
  title,
  children,
  noClose,
  noHeader,
  transparentContent,
  solid,
  withAnimation = true
}) => {
  const topClass = 'top-28'

  /* Vertically centered */
  // const topClass = 'top-1/2 -translate-y-1/2'

  return (
    <>
      {show && (
        <div
          className={`fixed w-full h-full max-h-screen overflow-y-auto left-0 top-0 z-modal backdrop-blur ${
            withAnimation ? styles['fadeIn'] : 'opacity-100'
          }`}
          style={{
            backgroundColor: solid ? '#222' : 'rgba(0, 0, 0, 0.5)'
          }}
          // Close the modal when underlay clicked
          onClick={onClose}
        >
          <div
            className={`absolute ${topClass} left-1/2 -translate-x-1/2 -translate-y-1/2 ${
              transparentContent ? '' : 'bg-white'
            } shadow-2xl rounded-15 ${
              withAnimation ? styles['fadeInDelayed'] : styles['modalBox']
            }`}
            style={{ width, minHeight: height }}
            // Prevent closing modal when clicking on content
            onClick={(e) => e.stopPropagation()}
          >
            {!noHeader && (
              <div className="pt-20 pb-8 md:pb-12 px-8 md:px-16">
                <div>
                  {title ? (
                    <p className="font-medium text-semiblack text-3xl md:text-39x text-center mb-0">
                      {title}
                    </p>
                  ) : (
                    ''
                  )}
                </div>
                {!noClose && (
                  <div className="absolute m-5 right-0 top-0">
                    <ButtonClose onClick={onClose} />
                  </div>
                )}
              </div>
            )}

            {children}
          </div>
        </div>
      )}
    </>
  )
}

function ButtonClose(props) {
  return (
    <>
      <button {...props}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ minWidth: '14px' }}
        >
          <path d="M13 1L1 13" stroke="#FFFFFF" strokeWidth="2" />
          <path d="M13 13L1 0.999999" stroke="#FFFFFF" strokeWidth="2" />
        </svg>
      </button>
    </>
  )
}
