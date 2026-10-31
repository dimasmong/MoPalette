import { useCallback, useState } from 'react'

export function useClipboard(timeout = 2000) {
  const [copiedText, setCopiedText] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<string | null>(null)

  const copyToClipboard = useCallback(
    async (text: string, customMessage = 'Copied to clipboard'): Promise<boolean> => {
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(text)
        } else {
          // Fallback for older browsers or non-secure contexts
          const textarea = document.createElement('textarea')
          textarea.value = text
          textarea.style.position = 'fixed'
          textarea.style.left = '-9999px'
          textarea.style.top = '0'
          document.body.appendChild(textarea)
          textarea.focus()
          textarea.select()
          document.execCommand('copy')
          document.body.removeChild(textarea)
        }

        setCopiedText(text)
        setFeedback(customMessage)

        setTimeout(() => {
          setCopiedText(null)
          setFeedback(null)
        }, timeout)

        return true
      } catch (err) {
        console.warn('Failed to copy to clipboard:', err)
        return false
      }
    },
    [timeout]
  )

  return { copiedText, feedback, copyToClipboard }
}
