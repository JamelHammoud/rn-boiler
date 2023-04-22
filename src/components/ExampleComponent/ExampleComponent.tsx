import { FC } from 'react'
import { Text } from 'react-native'
import { ExampleType } from '@types'
import { StyledExampleComponent } from '.'

type Props = {
  value: ExampleType
}

const ExampleComponent: FC<Props> = ({ value }) => {
  return (
    <StyledExampleComponent tint="red">
      <Text>{value.text}</Text>
    </StyledExampleComponent>
  )
}

export default ExampleComponent
