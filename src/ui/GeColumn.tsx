import styled from 'styled-components'
import { GeFlex } from './GeFlex'

export const GeColumn = styled(GeFlex)`
  flex:1;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: ${({ theme }) => `${theme.space.middle} 0`};
  }
`
