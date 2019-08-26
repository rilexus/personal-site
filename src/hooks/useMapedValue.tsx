import { useEffect, useState } from "react"

function mapValue(
  startScrollPosition,
  curScrollPos,
  endScrollPosition,
  startValue,
  endValue
) {
  if (startScrollPosition <= curScrollPos && curScrollPos < endScrollPosition) {
    const valueDiff = endValue - startValue
    const posDiff =
      (endScrollPosition - startScrollPosition) /
      (curScrollPos - startScrollPosition)
    const temp = valueDiff / posDiff
    return startValue + temp
  } else if (curScrollPos >= endScrollPosition) {
    return endValue
  }
  return startValue
}

export function useMappedValue(
  startValue,
  endValue,
  startScrollPosition,
  endScrollPosition
) {
  const isClient = typeof document === "object"
  const [scrollPosition, setScrollPosition] = useState()
  const [mappedValue, setMappedValue] = useState(getScrollPosition)

  function getScrollPosition() {
    return isClient
      ? document.documentElement.scrollTop || document.body.scrollTop
      : undefined
  }
  useEffect(() => {
    if (!isClient) return

    function handleScrollPosition() {
      setScrollPosition(getScrollPosition())
    }

    window.addEventListener("scroll", handleScrollPosition)
    return function clean() {
      window.removeEventListener("scroll", handleScrollPosition)
    }
  }, []) // on mount && unmount

  useEffect(() => {
    function map() {
      const mappedValue = mapValue(
        startScrollPosition,
        scrollPosition,
        endScrollPosition,
        startValue,
        endValue
      )
      setMappedValue(mappedValue)
    }
    map()
  }, [scrollPosition])

  return mappedValue
}
