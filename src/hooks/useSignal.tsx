import { useState } from "react"
import useTimeout from "./useTimeout"

/**
 * @desc returns true after given delay
 * @param {number} delay
 * @return {boolean}
 */
export default function useSignal(delay) {
  const [value, setValue] = useState(false) // init value: false
  useTimeout(() => setValue(true), delay) // toggle value to true
  return value // return value
}
