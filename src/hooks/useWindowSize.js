import { useEffect, useState } from "react";

export default function useWindowSize() {
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)

  const handleResize = () => {
    setHeight(window.innerHeight)
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    handleResize()

    document.addEventListener("resize", handleResize, false)

    return () => document.removeEventListener("resize", handleResize)
  }, [])

  return { height, width }
}