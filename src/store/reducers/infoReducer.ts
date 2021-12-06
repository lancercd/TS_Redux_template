import {InfoAction, InfoTypes} from "../types/InfoTypes"

export interface InfoState {
    readonly num: number;
    readonly arr: Array<number>;
}

const initialState: InfoState = {
    num: 0,
    arr: []
};

function infoReducer(state: InfoState = initialState, action: InfoAction): InfoState {

    let data = null;
    switch (action.type) {
        case InfoTypes.INCREMENT:
            data = action.payload;

            state.arr.push(data);
            return {...state, num: state.num + data};

        case InfoTypes.DECREMENT:
            data = -1 * action.payload;
            state.arr.push(data);

            return {...state, num: state.num + data};

        case InfoTypes.RESET:
            return {num: 0, arr: [0]};

        default:
            return state;
    }
}


export default infoReducer;
