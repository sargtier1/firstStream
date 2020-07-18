import * as React from 'react'
import styled from 'styled-components'
import {
  compose,
  color,
  space,
  layout,
  border,
  flexbox,
  ColorProps,
  SpaceProps,
  LayoutProps,
  BorderProps,
  FlexboxProps,
} from 'styled-system'

type Props = ColorProps & SpaceProps & LayoutProps & BorderProps & FlexboxProps

export const Box: React.FC<Props> = ({ children, ...props }) => {
  // @ts-ignore
  return <BoxPrimitive {...props}>{children}</BoxPrimitive>
}

const BoxPrimitive = styled.div<Props>`
  display: flex;
  ${compose(color, space, layout, border, flexbox)};
`
