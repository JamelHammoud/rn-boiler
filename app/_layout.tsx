import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components/native'
import { persistor, store } from '@redux'
import { theme } from '@utils'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Stack>
            <Stack.Screen name="index" />
            <Stack.Screen name="example" options={{ presentation: 'modal', headerShown: false }} />
          </Stack>
          <StatusBar style="dark" />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
