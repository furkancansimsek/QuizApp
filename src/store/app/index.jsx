import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        class: "",
        name: "",
    },
    answers: [],
};

const app = createSlice({
    name: "app",
    initialState,
    reducers: {
        _setUser: (state, action) => {
            state.user = action.payload;
        },
        _removeUser: (state) => {
            state.user = {
                class: "",
                name: "",
            };
        },
        _setAnswers: (state, action) => {
            state.answers = [...state.answers, action.payload];
        },
        _removeAnswers: (state) => {
            state.answers = [];
        },
    },
});

export const { _setUser, _removeUser, _setAnswers, _removeAnswers } = app.actions;
export default app.reducer;