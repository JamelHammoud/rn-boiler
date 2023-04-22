import { FC } from 'react'
import { StatusBar } from 'expo-status-bar'
import { ExampleComponent } from '@components'
import { StyledExampleView } from '.'

const ExampleView: FC = () => {
  return (
    <>
      <StyledExampleView>
        <ExampleComponent value={{ text: '1234' }} />
      </StyledExampleView>
      <StatusBar style="light" />
    </>
  )
}

export default ExampleView
