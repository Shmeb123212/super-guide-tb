import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { tripSelects } from "./findTrip-reducer";
import {monthsReducer} from './months-reducer'
import {personInfoReducer} from './personInfo-reducer';
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: {
      [tripSelects.name]: tripSelects.reducer,
      [monthsReducer.name]:monthsReducer.reducer,
      [personInfoReducer.name]: personInfoReducer.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;

export type AppState = ReturnType<AppStore["getState"]>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);