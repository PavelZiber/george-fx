import styled from 'styled-components'

export const GeInput  = styled.input`
  border:none;
  background-image:none;
  background-color:transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.space.middle};
`
