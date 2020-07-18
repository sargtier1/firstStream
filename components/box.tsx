import * as React from 'react'
import styled from 'styled-components'
import {
  color,
  space,
  layout,
  border,
  ColorProps,
  SpaceProps,
  LayoutProps,
  BorderProps,
} from 'styled-system'

type Props = ColorProps & SpaceProps & LayoutProps & BorderProps

export const Box: React.FC<Props> = ({ children, ...props }) => {
  // @ts-ignore
  return <BoxPrimitive  {...props}>{children}</BoxPrimitive>
}

const BoxPrimitive = styled.div<Props>`
  ${color};
  ${layout};
  ${space};
  ${border};
`
