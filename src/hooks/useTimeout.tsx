import { useEffect } from "react"

/**
 * @desc calls given callback after given delay
 * @param callback
 * @param timeout
 */
export default function useTimeout(callback, timeout){
  useEffect(() => {
    const id = setTimeout(callback, timeout);
    return function() {
      clearTimeout(id);
    }
  }, []);
}
