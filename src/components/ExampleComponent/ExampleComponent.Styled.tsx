import styled from 'styled-components/native'

type StyledProps = {
  tint: string
}

const StyledExampleComponent = styled.View<StyledProps>`
  background-color: ${({ tint }) => tint};
`

export default StyledExampleComponent
