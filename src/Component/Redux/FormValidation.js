import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    userName: "",
    userPassword: "",
    userNameValidation: true,
    userPasswordValidation: true,
}
const formValidation = createSlice({
    name: "formValidation",
    initialState,
    reducers: {
        userName: (state, action) => {
            state.userName = action.payload;
        },
        userPassword: (state, action) => {
            state.userPassword = action.payload;
        },
        userNameValidation: (state, action) => {
            if (state.userName.trim() === "") {
                state.userNameValidation = action.payload;
            } else {
                state.userNameValidation = true;
            }
        },
        userPasswordValidation: (state, action) => {
            if (state.userPassword.trim() === "") {
                state.userPasswordValidation = action.payload;
            } else {
                state.userPasswordValidation = true;
            }
        }
    }
})

export const formValidationStore = formValidation.reducer;
export const { userName, userNameValidation, userPassword, userPasswordValidation } = formValidation.actions;