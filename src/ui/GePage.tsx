import styled from 'styled-components'
import { PropsWithChildren, ReactNode } from 'react'
import { GeFlex } from './GeFlex'

const GePageWrapper = styled(GeFlex)`
  flex-direction: column;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const GeHeader = styled(GeFlex)`
  height: 50px;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background: ${({ theme }) => theme.foreground};
  color: ${({ theme }) => theme.background};
  padding: ${({ theme }) => theme.space.big};
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: ${({ theme }) => `${theme.space.middle} ${theme.space.big}`};
  }
`

export const GePage = ({ children, header = null }: PropsWithChildren<{ header?: ReactNode }>) => (
  <GePageWrapper>
    <GeHeader>
      <GeFlex><h1>George fx</h1></GeFlex>
      {header && header}
    </GeHeader>
    {children}
  </GePageWrapper>
)
