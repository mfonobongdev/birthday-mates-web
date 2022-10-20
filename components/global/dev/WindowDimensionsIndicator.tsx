import React from 'react'

function getWindowDimensions() {
  // if (!window) return { width: 0, height: 0 }
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height
  }
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = React.useState({ width: 0, height: 0 })

  React.useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }
    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}

export const WindowDimensionsIndicator = (): JSX.Element => {
  const { width, height } = useWindowDimensions()
  return (
    <div className={'fixed top-0 right-10 m-8 flex space-x-3 rounded bg-gray-200/50 p-2 font-mono text-xs'}>
      <div>{width} w</div>
      <div>{height} h</div>
    </div>
  )
}
