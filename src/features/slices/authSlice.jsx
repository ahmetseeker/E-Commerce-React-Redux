import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: JSON.parse(sessionStorage.getItem("authUser")) || {
            name: "",
            password: "",
            email: "",
            img: "",
            authUser: false
        }
    },
    reducers: {
        login(state, action) {
            const user = action.payload;
            const userValidation = !/^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/.test(user.name);
            const passwordValidation = !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(user.password);
            const emailValidation = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/.test(user.email);
            state.user = user;
            if(!userValidation || !passwordValidation || !emailValidation) {
                state.user.authUser = false;
            } else {
                state.user.authUser = true;
                const saveState = JSON.stringify(user);
                sessionStorage.setItem("authUser", saveState);
            }
        },
        logout(state) {
            state.user = {
                name: "",
                password: "",
                email: "",
                img: "",
                authUser: false
            };
            sessionStorage.clear();
        }
    }
})

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;