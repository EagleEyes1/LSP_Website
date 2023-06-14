import { createSlice } from '@reduxjs/toolkit'

const initialValue = {
    id_user: "",
    display_name: "",
    email: ""
}

const userSlice = createSlice({
    name: "user",
    initialState: {
        isLoggedIn: false,
        userData: {
            initialValue,
        }
    },

    reducers: {
        signIn(state, action) {
            state.userData = action.payload;
            state.isLoggedIn = true;
        },
        logOut(state) {
            state.isLoggedIn = false;
            state = {
                isLoggedIn: false,
                user: {
                    initialValue,
                }
            }
        }
    }
}
)

export const { signIn, logOut } = userSlice.actions
export default userSlice.reducer


