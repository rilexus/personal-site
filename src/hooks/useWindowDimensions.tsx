import { useEffect, useState } from "react"

export default function useWindowDimensions() {
  const isClient = typeof window === "object"
  const [size, setSize] = useState(getSize)

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    }
  }
  function handleResize() {
    setSize(getSize())
  }

  useEffect(() => {
    if (!isClient) return
    window.addEventListener("resize", handleResize)
    return function() {
      window.removeEventListener("resize", handleResize)
    }
  }, [size]) // clean only size has changed

  return size || getSize()
}
