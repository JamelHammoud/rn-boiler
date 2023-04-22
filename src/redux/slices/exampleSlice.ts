import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  value: string
}

const initialState: InitialState = {
  value: 'initial'
}

export const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    setExampleValue: (state, action: PayloadAction<InitialState['value']>) => {
      state.value = action.payload
    }
  }
})

export const { setExampleValue } = exampleSlice.actions
export default exampleSlice.reducer
