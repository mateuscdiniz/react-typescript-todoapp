import * as React from 'react'
import SvgContainerProps from './SvgContainer.model'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function SvgContainer({
  id,
  children,
  viewBox,
  width,
  height,
  rotationDegrees,
  marginTop,
  marginBottom,
  marginRight,
  marginLeft,
  paddingTop,
  paddingBottom,
  paddingRight,
  paddingLeft,
}: SvgContainerProps) {
  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,

    transform: rotationDegrees
      ? `rotate(${rotationDegrees}deg)`
      : 'rotate(0deg)',
    marginTop,
    marginBottom,
    marginRight,
    marginLeft,
    paddingTop,
    paddingBottom,
    paddingRight,
    paddingLeft,
  }

  const DEFAULT_DIMENSION = 24

  return (
    <svg
      id={id}
      style={styles}
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      width={width || DEFAULT_DIMENSION}
      height={height || DEFAULT_DIMENSION}
      viewBox={
        viewBox ? viewBox : `0 0 ${DEFAULT_DIMENSION} ${DEFAULT_DIMENSION}`
      }
    >
      {children}
    </svg>
  )
}

export default SvgContainer
