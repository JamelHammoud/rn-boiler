import { FC } from 'react'
import { StatusBar } from 'expo-status-bar'
import { ExampleComponent } from '../../components'
import { StyledExampleView } from '.'

const ExampleView: FC = () => {
  return (
    <>
      <StyledExampleView>
        <ExampleComponent value="TESTING MODAL COOL" />
      </StyledExampleView>
      <StatusBar style="light" />
    </>
  )
}

export default ExampleView
