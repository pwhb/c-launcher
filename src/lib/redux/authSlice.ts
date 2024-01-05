import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';

export interface AuthState
{
    currentUser: User | null;
}

const initialState: AuthState = {
    currentUser: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User | null>) =>
        {
            state.currentUser = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setUser } = authSlice.actions;

export default authSlice.reducer;