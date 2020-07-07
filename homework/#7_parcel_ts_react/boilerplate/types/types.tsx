import store from "../redux/store";
export type RootState = ReturnType<typeof store.getState>;
export type DispatchOfTypes = typeof store.dispatch;
