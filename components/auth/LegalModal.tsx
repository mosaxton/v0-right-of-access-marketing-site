'use client'

import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

interface LegalModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

export function LegalModal({ isOpen, onClose, title, children }: LegalModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return

    // Lock body scroll
    document.body.style.overflow = 'hidden'

    // Focus modal title
    const titleElement = modalRef.current?.querySelector('h2')
    titleElement?.focus()

    // Handle Escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    // Handle backdrop click
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) onClose()
    }

    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-50 transition-opacity duration-200"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose()
        }}
      />

      {/* Modal */}
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none"
      >
        <div className="pointer-events-auto w-full max-w-[720px] max-h-[80vh] bg-[#F2EDE0] rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-fade-in">
          {/* Header */}
          <div className="flex items-center justify-between p-6 sm:p-8 border-b border-black/10">
            <h2
              id="modal-title"
              className="text-2xl sm:text-3xl font-black text-[#0F2044]"
              tabIndex={-1}
            >
              {title}
            </h2>
            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="p-2 hover:bg-black/5 rounded-lg transition-colors flex-shrink-0"
            >
              <X className="w-6 h-6 text-[#0F2044]" />
            </button>
          </div>

          {/* Body with scrolling */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8">
            <div className="prose prose-sm max-w-none text-[#0F2044]/80 font-medium leading-relaxed text-sm sm:text-base">
              {children}
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-black/10 p-6 sm:p-8 flex justify-end">
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center px-6 py-3 bg-[#B8864B] text-white rounded-full font-black text-sm hover:bg-[#a67639] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        :global(.animate-fade-in) {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </>
  )
}
