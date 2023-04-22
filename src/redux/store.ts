import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createFilter } from 'redux-persist-transform-filter'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import { exampleReducer } from './slices'

const reducers = combineReducers({
  example: exampleReducer
})

// Use `createFilter` to persist parts of reducers
// const subsetFilter = createFilter('example', ['value'])

const persistConfig = {
  key: 'root',
  whitelist: [],
  storage: AsyncStorage,
  transforms: [], // Add subsetFilters here
  stateReconciler: autoMergeLevel2 as any
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
