/**
 * Info Action Types
 */
export enum InfoTypes {
    INCREMENT = "increment",

    DECREMENT = "decrement",

    RESET = "reset",
}

/**
 * type of Increment payload
 */
export type IncrementPayloadType = number;

/**
 * increment action interface
 */
export interface Increment{
    type: typeof InfoTypes.INCREMENT,
    payload: IncrementPayloadType
}

/**
 * type of Decrement payload
 */
export type DecrementPayloadType = number;

/**
 * decrement action interface
 */
export interface Decrement{
    type: typeof InfoTypes.DECREMENT,
    payload: DecrementPayloadType
}

/**
 * reset action interface
 */
export interface Reset{
    type: typeof InfoTypes.RESET,
}

/**
 * action type
 */
export type InfoAction = Increment | Decrement | Reset;

