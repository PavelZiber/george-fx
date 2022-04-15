import styled from 'styled-components'
import { GeFlex } from './GeFlex'

export const GeAppContainer = styled(GeFlex)`
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  color: ${({ theme }) => theme.foreground}
  background: ${({ theme }) => theme.background}
`
