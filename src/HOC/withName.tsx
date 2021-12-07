
import React, {Component, ComponentType} from "react";
import {IProps} from "../component/HOCShowName";


/*interface IProps {
    name: string;
    age: number;
    list: Array<number>;
}*/

type ExcludeKey<T, U> = Pick<T, Exclude<keyof T, U>>;

/*const obj: ExcludeKey<IProps, "name"> = {

}*/

function withName<IProps>(Wrap: ComponentType<any>): ComponentType<ExcludeKey<IProps, "name">> {

    return class extends Component<ExcludeKey<IProps, "name">> {
        render() {
            return <Wrap {...this.props} name={"lancercd"} />
        }
    }
}


export default withName;
