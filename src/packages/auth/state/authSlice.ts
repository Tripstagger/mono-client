import { createSlice, Slice } from '@reduxjs/toolkit'

const initialState = {
  isLogged: false
}

export type AuthState = typeof initialState

const authSlice: Slice<AuthState> = createSlice({
  name: 'auth',
  initialState,
  reducers: {}
})

export const authReducer = authSlice.reducer
