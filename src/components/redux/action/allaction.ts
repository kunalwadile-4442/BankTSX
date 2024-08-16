import {
  DEPOSITTSX,
  WITHDRAWTSX,
  UPDATE_PASSWORDTSX,
  LOGINTSX,
  LOGOUTTSX,
} from "../../../model/typetsx";

export const deposit = (amount: number) => ({
  type: DEPOSITTSX,
  payload: amount,
});

export const withdraw = (amount: number) => ({
  type: WITHDRAWTSX,
  payload: amount,
});

export const updatePassword = (newPassword: string) => ({
  type: UPDATE_PASSWORDTSX,
  payload: newPassword,
});

export const login = () => ({
  type: LOGINTSX,
});

export const logout = () => ({
  type: LOGOUTTSX,
});

