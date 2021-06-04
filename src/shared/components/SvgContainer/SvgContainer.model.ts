import BoxProps from '../../icons/models/BoxProps.model'

type SvgContainerProps = BoxProps & {
  id?: string
  width?: number
  height?: number
  viewBox?: string
  children: JSX.Element
  rotationDegrees?: number
  hoverColor?: string
}

export default SvgContainerProps
