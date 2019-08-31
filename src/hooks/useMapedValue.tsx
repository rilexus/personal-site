import useScrollPosition from "./useScrollPosition"

// linear interpolation
// https://mattdesl.svbtle.com/linear-interpolation
function lerp(startValue, endValue, t) {
  return startValue * (1 - t) + endValue * t
}

export function useMappedValue(startValue, endValue, fromPx, toPx) {
  const currScrollPos = useScrollPosition()
  if (currScrollPos <= fromPx) return startValue
  if (currScrollPos > toPx) return endValue
  const t = (currScrollPos - fromPx) / (toPx - fromPx)
  return lerp(startValue, endValue, t)
}
