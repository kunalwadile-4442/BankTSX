    import {
    InitialStateTSX,
    MoneyActionTypesTSX,
    DEPOSITTSX,
    WITHDRAWTSX,
    UPDATE_PASSWORDTSX,
    LOGINTSX,
    LOGOUTTSX,
    } from "../../../model/typetsx";

    const initialState: InitialStateTSX = {
    balance: 500,
    password: "Test@123",
    username: "Test",
    isAuth: false,
    };

    const moneyReducer = (
    state = initialState,
    action: MoneyActionTypesTSX
    ): InitialStateTSX => {
    switch (action.type) {
        case DEPOSITTSX:
        return { ...state, balance: state.balance + action.payload };
        case WITHDRAWTSX:
        return { ...state, balance: state.balance - action.payload };
        case UPDATE_PASSWORDTSX:
        return { ...state, password: action.payload };
        case LOGINTSX:
        return { ...state, isAuth: true };
        case LOGOUTTSX:
        return { ...state, isAuth: false };
        default:
        return state;
    }
    };

    export default moneyReducer;
