import { useEffect, useState } from "react"
import useWindowDimensions from "./useWindowDimensions"

export function useAppearFromBottom(elementRef){
  const [isInView, setInView] = useState(false)
  const windowDimensions = useWindowDimensions()
  const isClient = typeof window === "object"

  function handleScroll() {
    if (elementRef.current) {
      const elem = elementRef.current.getBoundingClientRect()
      const isInFromBottom = elem.top < windowDimensions.height
      setInView(isInFromBottom);
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
