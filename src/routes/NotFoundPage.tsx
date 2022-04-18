import styled from 'styled-components'
import { GePage, GeFlex } from '../ui'

const Message = styled(GeFlex)`
  height: 300px;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.font.middle}
`

export const NotFoundPage = () => (<GePage><Message>Page not found!</Message></GePage>)
