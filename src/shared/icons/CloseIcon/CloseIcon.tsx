import * as React from 'react'

import { SvgContainer } from '../../components'
import IconProps from '../models/IconProps.model'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function CloseIcon({
  id,
  title,
  width = 35,
  height = 35,

  marginTop = 0,
  marginLeft = 0,
  marginRight = 0,
  marginBottom = 0,

  paddingTop = 0,
  paddingLeft = 1,
  paddingRight = 1,
  paddingBottom = 0,
  hoverColor,

  rotationDegrees,
  color = 'white',
}: IconProps) {
  return (
    <SvgContainer
      id={id}
      width={width}
      height={height}
      rotationDegrees={rotationDegrees}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginRight={marginRight}
      marginLeft={marginLeft}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingRight={paddingRight}
      paddingLeft={paddingLeft}
      hoverColor={hoverColor}
    >
      <>
        <title>{title || 'Close Icon'}</title>
        <path
          fill={color}
          d={`M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59
            12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z`}
        />
      </>
    </SvgContainer>
  )
}

export default CloseIcon
