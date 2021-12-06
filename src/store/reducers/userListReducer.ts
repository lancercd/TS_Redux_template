import {AddUser, RemoveUser, UserItem, UserListTypes} from "../types/UserListTypes";

export interface UserListState {
    readonly list: Array<UserItem>
}

const initialState: UserListState = {
    list: []
}

function userListReducer(state: UserListState = initialState, action: AddUser | RemoveUser): UserListState {

    let list = null;
    switch (action.type) {
        case UserListTypes.ADD_USER:
            list = Array.from(state.list);
            list.push(action.payload);
            return {list};

        case UserListTypes.REMOVE_USER:
            list = state.list.filter((item, index) => {
                return item.id !== action.payload;
            })
            return {list};

        default:
            return state;
    }
}


export default userListReducer;
