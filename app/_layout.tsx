import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const AppLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="example" options={{ presentation: 'modal', headerShown: false }} />
      </Stack>
      <StatusBar style="dark" />
    </>
  )
}

export default AppLayout
