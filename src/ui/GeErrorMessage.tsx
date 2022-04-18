import styled from 'styled-components'
import { GeFlex } from './GeFlex'

export const GeErrorMessage = styled(GeFlex)`
  align-items: center;
  justify-content: center;
  width: 100%;
  background: ${({ theme }) => theme.error};
  color: ${({ theme }) => theme.background};
  padding: ${({ theme }) => `${theme.space.big} 0`}
`
