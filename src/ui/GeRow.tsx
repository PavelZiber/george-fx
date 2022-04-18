import styled from 'styled-components'
import { GeFlex } from './GeFlex'

export const GeRow = styled(GeFlex)`
  height: 50px;
  width: 100%;
  border-bottom: 1px solid black;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`
