

export enum UserListTypes {
    ADD_USER = "add_user",

    REMOVE_USER = "remove_user",
}

export enum UserSex {
    MALE,
    FEMALE
}

export type userId = number;


export interface UserItem {
    id: userId;
    name: string;
    age: number;
    sex: UserSex;
}


export interface AddUser {
    type: typeof UserListTypes.ADD_USER;
    payload: UserItem;
}


export interface RemoveUser {
    type: typeof UserListTypes.REMOVE_USER,
    payload: userId
}
