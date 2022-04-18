import styled from 'styled-components'
import { GeFlex } from './GeFlex'

export const GeLoader = styled(GeFlex)`
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.font.middle};
  padding: ${({ theme }) => `${theme.space.big} 0`};
`
