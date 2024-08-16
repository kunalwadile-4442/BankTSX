    export interface InitialStateTSX {
      balance: number;
      password: string;
      username: string;
      isAuth: boolean;
    }

    export interface notiSound {
      playSound: () => void;
    }

    export interface PasswordProps {
      onPasswordSubmit: (password: string) => void;
      onForgotPassword: () => void;
    }

    export interface PasswordResetProps {
      onResetPassword: (newPassword: string) => void;
      onGoBack: () => void;
    }
    export const DEPOSITTSX = "DEPOSIT";
    export const WITHDRAWTSX = "WITHDRAW";
    export const UPDATE_PASSWORDTSX = "UPDATE_PASSWORD";
    export const LOGINTSX = "LOGIN";
    export const LOGOUTTSX = "LOGOUT";

    interface DepositActionTSX {
      type: typeof DEPOSITTSX;
      payload: number;
    }

    interface WithdrawActionTSX {
      type: typeof WITHDRAWTSX;
      payload: number;
    }

    interface UpdatePasswordActionTSX {
      type: typeof UPDATE_PASSWORDTSX;
      payload: string;
    }

    interface LoginActionTSX {
      type: typeof LOGINTSX;
    }

    interface LogoutActionTSX {
      type: typeof LOGOUTTSX;
    }

    export type MoneyActionTypesTSX =
      | DepositActionTSX
      | WithdrawActionTSX
      | UpdatePasswordActionTSX
      | LoginActionTSX
      | LogoutActionTSX;
