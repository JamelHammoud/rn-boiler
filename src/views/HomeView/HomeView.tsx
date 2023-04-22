import { FC } from 'react'
import { Link, Stack } from 'expo-router'
import { Text } from 'react-native'
import { StyledHomeView } from '.'

const HomeView: FC = () => {
  return (
    <StyledHomeView>
      <Stack.Screen options={{ title: 'Home Screen', headerShown: true }} />
      <Text>This is the home</Text>
      <Link href="/example">Click this to open up the modal</Link>
    </StyledHomeView>
  )
}

export default HomeView
