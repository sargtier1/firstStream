import React from 'react'
import { useThemeContext } from './theme/provider'
import styled from 'styled-components'
import {
  compose,
  space,
  color,
  border,
  layout,
  typography,
  SpaceProps,
  ColorProps,
  BorderProps,
  LayoutProps,
  TypographyProps,
  variant,
} from 'styled-system'

interface Props {}

export const ThemeToggle: React.FC<
  Props & SpaceProps & ColorProps & BorderProps & LayoutProps & TypographyProps
> = () => {
  const { mode, toggleMode } = useThemeContext()

  return (
    <>
      <Button
        //@ts-ignore
        py={'4px'}
        px={'12px'}
        height={'40px'}
        minWidth={'100px'}
        borderRadius={'4px'}
        borderStyle='solid'
        borderColor='primary'
        bg='primary'
        color='textWhite'
        fontSize={'1.4rem'}
        onClick={toggleMode}
      >
        {mode}
      </Button>
    </>
  )
}

const type = (props: any) =>
  variant({
    prop: 'type',
    scale: 'colors',
    variants: {
      primary: {
        bg: 'colors.primary',
        color: 'colors.textWhite',
      },
      secondary: {
        bg: 'colors.secondary',
        color: 'text',
      },
    },
  })

  const Button = styled('button')(
    {
      // animation hover effects
    },
    compose(type, space, color, border, layout, typography)
  )
  