import BoxProps from '../../models/BoxProps.model'

type SvgContainerProps = BoxProps & {
  id?: string
  width?: number
  height?: number
  viewBox?: string
  children: JSX.Element
  rotationDegrees?: number
}

export default SvgContainerProps
