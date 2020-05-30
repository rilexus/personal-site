// import useScrollPosition from "./useScrollPosition"
import * as eases from "eases"
import { useEffect, useState } from "react"

export enum EasingFunctionNames {
  backInOut,
  backIn,
  backOut,
  bounceInOut,
  bounceIn,
  bounceOut,
  circInOut,
  circIn,
  circOut,
  cubicInOut,
  cubicIn,
  cubicOut,
  elasticInOut,
  elasticIn,
  elasticOut,
  expoInOut,
  expoIn,
  expoOut,
  linear,
  quadInOut,
  quadIn,
  quadOut,
  quartInOut,
  quartIn,
  quartOut,
  quintInOut,
  quintIn,
  quintOut,
  sineInOut,
  sineIn,
  sineOut,
}

function useScrollPosition() {
  const isClient = typeof document === "object"
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    if (!isClient) return

    function handleScrollPosition() {
      const newPos = isClient
        ? document.documentElement.scrollTop || document.body.scrollTop
        : undefined
      setScrollPosition(newPos)
    }

    window.addEventListener("scroll", handleScrollPosition)
    return function clean() {
      window.removeEventListener("scroll", handleScrollPosition)
    }
  }, []) // on mount && unmount

  return scrollPosition
}

// linear interpolation
// https://mattdesl.svbtle.com/linear-interpolation
function lerp(startValue, endValue, t) {
  return startValue * (1 - t) + endValue * t
}

/**
 * maps curr value to a value 0-1
 * @param from
 * @param curr
 * @param to
 */
function mapScrollPos(from: number, curr: number, to: number): number {
  if (curr <= from) return 0
  if (curr >= to) return 1
  return (curr - from) / (to - from)
}

/**
 *
 * @param { number } startValue
 * @param { number } endValue
 * @param { number } fromScrollPos - Position in px from which the mapping should start.
 * @param { number } toScrollPos - Position in px at which the mapping should end.
 * @param { EasingFunctionNames } easingFunctionName - Name of one easing function.
 */
export function useMapScrollToValue(
  startValue,
  endValue,
  fromScrollPos,
  toScrollPos,
  easingFunctionName?: EasingFunctionNames
) {
  const currScrollPos = useScrollPosition()
  const mappedPos = mapScrollPos(fromScrollPos, currScrollPos, toScrollPos)
  if (!easingFunctionName) return lerp(startValue, endValue, mappedPos)
  const availableFunctionNames = Object.keys(eases)
  const selectedName = availableFunctionNames[easingFunctionName]
  const selectedEaseFunction = eases[selectedName]
  const easedValue = selectedEaseFunction(mappedPos)
  return lerp(startValue, endValue, easedValue)
}
