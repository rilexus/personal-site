import { useEffect, useState } from "react"
import useWindowDimensions from "./useWindowDimensions"

export function useIsInView(elementRef) {
  const [isInView, setInView] = useState(false)
  const windowDimensions = useWindowDimensions()
  const isClient = typeof window === "object"

  function handleScroll() {
    if (elementRef.current) {
      const elem = elementRef.current.getBoundingClientRect()
      const isInFromTop = elem.top + elem.height > 0
      const isInFromBottom = elem.top < windowDimensions.height
      setInView(isInFromTop && isInFromBottom)
    }
  }

  useEffect(() => {
    if (!isClient) return
    window.addEventListener("scroll", handleScroll)
    return function() {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return isInView
}
