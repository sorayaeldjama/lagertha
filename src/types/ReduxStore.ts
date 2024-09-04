import { RootState } from "@/store";
import { AnyAction, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";

export type ReduxStore =  MiddlewareAPI<Dispatch<AnyAction>, RootState>