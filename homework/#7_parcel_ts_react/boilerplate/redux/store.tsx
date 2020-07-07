import { createSlice, configureStore } from "@reduxjs/toolkit";
import { stringify } from "querystring";

const reduxToDo = createSlice({
  name: "todosSlice",
  initialState: { todos: [], changeText: "" },
  reducers: {
    ADD: (state: { todos: {}[] }, action) => {
      state.todos.push({ text: action.payload, id: Date.now() });
    },
    DELETE: (state, action) => {
      state.todos = state.todos.filter(
        (i: { id: string | number }) => String(i.id) !== String(action.payload)
      );
    },
    ONCHANGE: (state, action) => {
      state.changeText = action.payload;
    },
  },
});

export const { ADD, DELETE, ONCHANGE } = reduxToDo.actions;

const store = configureStore({
  reducer: reduxToDo.reducer,
});

export default store;
