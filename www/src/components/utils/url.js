export const getURLParameter = (name) => {
  if (typeof window === 'undefined') return

  return (
    decodeURIComponent(
      (new RegExp(`[?|&]${name}=([^&;]+?)(&|#|;|$)`).exec(
        window.location.href
      ) || [null, ''])[1].replace(/\+/g, '%20')
    ) || null
  )
}
