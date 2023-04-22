import { FC } from 'react'
import { Text } from 'react-native'
import { ExampleType } from '@types'
import { useAppSelector } from '@redux'
import { StyledExampleComponent } from '.'

type Props = {
  value: ExampleType
}

const ExampleComponent: FC<Props> = ({ value }) => {
  const exampleState = useAppSelector((state) => state.example)

  return (
    <StyledExampleComponent tint="red">
      <Text>{value.text}</Text>
      <Text>{exampleState.value}</Text>
    </StyledExampleComponent>
  )
}

export default ExampleComponent
