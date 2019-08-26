import * as React from 'react';
import { useEffect, useState } from "react"
import { useIsInView } from "./useIsinView"

export function useAppearedInView(ref) {
  const isInView = useIsInView(ref);
  const [appeared, setAppeared] = useState(false);
  useEffect(()=>{
    if (isInView) setAppeared(true);
  },[isInView]);
  return appeared
}
