import { FC } from 'react'
import { Text } from 'react-native'
import { StyledExampleComponent } from '.'

type Props = {
  value: string
}

const ExampleComponent: FC<Props> = ({ value }) => {
  return (
    <StyledExampleComponent tint="red">
      <Text>{value}</Text>
    </StyledExampleComponent>
  )
}

export default ExampleComponent
