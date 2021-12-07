import React, {Component} from 'react';
import withName from "../HOC/withName";

export interface IProps {
    name: string;
    age: number;
    list: Array<number>;
    // children?: React.ReactNode
    [props: string]: any
}

// 未完成
class HocShowName extends Component<IProps> {
    render() {
        return (
            <div>
                {this.props.name}
                <div>
                    999999999
                </div>
            </div>
        );
    }
}

export default withName<IProps>(HocShowName);
