import {AddUser, RemoveUser, userId, UserItem, UserListTypes} from "../types/UserListTypes";
import {Dispatch} from "redux";


/**
 * 添加用户
 *      dispatch
 * @param data UserItem
 */
export const addUser = (data: UserItem): AddUser => ({type: UserListTypes.ADD_USER, payload: data});


/**
 * 移除用户 by userId
 *      dispatch
 * @param id
 */
export const removeUser = (id: userId): Function => {
    return (dispatch: Dispatch<RemoveUser>): void => {
        setTimeout(() => {
            dispatch({
                type: UserListTypes.REMOVE_USER,
                payload: id
            })
        }, 500);
    }
}

export interface IUserListAction {
    readonly addUser: typeof addUser
    readonly removeUser: typeof removeUser
}
