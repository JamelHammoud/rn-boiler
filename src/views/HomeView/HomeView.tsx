import { FC } from 'react'
import { Button, Text } from 'react-native'
import { Link, Stack } from 'expo-router'
import { setExampleValue, useAppDispatch } from '@redux'
import { StyledHomeView } from '.'

const HomeView: FC = () => {
  const dispatch = useAppDispatch()

  return (
    <StyledHomeView>
      <Stack.Screen options={{ title: 'Home Screen', headerShown: true }} />
      <Text>This is the home</Text>
      <Link href="/example">Click this to open up the modal</Link>
      <Button
        title="CLICK TO UPDATE STATE"
        onPress={() => dispatch(setExampleValue(Date.now().toString()))}
      />
    </StyledHomeView>
  )
}

export default HomeView
