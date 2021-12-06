import {Decrement, DecrementPayloadType, Increment, IncrementPayloadType, InfoTypes, Reset} from "../types/InfoTypes";
import {Dispatch} from "redux";


export const increment = (data: IncrementPayloadType): Increment => ({type: InfoTypes.INCREMENT, payload: data});

export const decrement = (data: DecrementPayloadType): Function => {
    return (dispatch: Dispatch<Decrement>): void => {
        setTimeout(() => {
            dispatch({
                type: InfoTypes.DECREMENT,
                payload: data
            })
        }, 1000);
    }
}

export const reset = (): Function => {
    return (dispatch: Dispatch<Reset>): void => {
        dispatch({
            type: InfoTypes.RESET
        })
    }
}

export interface IInfoAction {
    readonly increment: typeof increment;
    readonly decrement: typeof decrement;
    readonly reset: typeof reset;
}
