import React, {Component} from 'react';
import {Button} from "antd";
import {RootStoreState, UserListActions} from "../store";
import {UserListState} from "../store/reducers/userListReducer";
import {UserItem, UserSex} from "../store/types/UserListTypes";
import {IUserListAction} from "../store/actions/UserListAction";
import {connect} from "react-redux";

const mapStateToProps = (state: RootStoreState): UserListState => state.userList;

const mapDispatchToProps: IUserListAction = {
    addUser: UserListActions.addUser,
    removeUser: UserListActions.removeUser
};

interface IProps extends UserListState, IUserListAction{}


class ReduxUserList extends Component<IProps> {

    constructor(props: IProps) {
        super(props);

        this.addUserHandler = this.addUserHandler.bind(this);
        this.removeUserHandler = this.removeUserHandler.bind(this);
    }


    public static sexTransform(sex: UserSex): string {
        if(sex === UserSex.MALE) return "男";
        if(sex === UserSex.FEMALE) return "女";
        return "未知";
    }

    public addUserHandler(): void {
        const list = this.props.list;
        let id = 1;
        if(0 !== list.length){
            id = list[list.length - 1].id + 1;
        }
        const userItem: UserItem = {
            id,
            name: "lancercd" + id,
            age: 18 + id,
            sex: UserSex.MALE
        }
        this.props.addUser(userItem);
    }

    public removeUserHandler(): void {
        const list = this.props.list;
        let id = 1;
        if(0 !== list.length){
            id = list[list.length - 1].id;
        }
        this.props.removeUser(id);
    }


    render(): JSX.Element {
        console.log(this.props);
        return (
            <div>
                <div>
                    <Button type="primary" onClick={this.addUserHandler}>添加</Button>
                    <Button type="primary" onClick={this.removeUserHandler}>移除(异步)</Button>
                </div>
                <ul>
                    {
                        this.props.list.map((item: UserItem) => {
                            return (
                                <li key={item.id}>
                                    id: {item.id},
                                    username: {item.name},
                                    age: {item.age},
                                    sex: {ReduxUserList.sexTransform(item.sex)}
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxUserList);
