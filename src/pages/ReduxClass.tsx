import React, {Component} from 'react';
import {Button} from "antd";
import {RootStoreState, InfoActions} from "../store";
import {InfoState} from "../store/reducers/infoReducer";
import {IInfoAction} from "../store/actions/InfoAction";
import {connect} from "react-redux";


const mapStateToProps = (state: RootStoreState): InfoState => state.info;


const mapDispatchToToProps: IInfoAction = {
    increment: InfoActions.increment,
    decrement: InfoActions.decrement,
    reset: InfoActions.reset
}


/**
 * component Props
 */
interface IProps extends IInfoAction, InfoState{}

/**
 * component State
 */
interface IState {}


class ReduxClass extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.depositMoneyHandler = this.depositMoneyHandler.bind(this);
        this.withdrawMoneyHandler = this.withdrawMoneyHandler.bind(this);
        this.bankruptHandler = this.bankruptHandler.bind(this);
    }


    private depositMoneyHandler(): void {
        this.props.increment(2);
    }
    private withdrawMoneyHandler(): void {
        this.props.decrement(1);
    }
    private bankruptHandler(): void {
        this.props.reset();
    }


    render(): JSX.Element {
        const props = this.props;
        return (
            <div>
                <h1>{props.num}</h1>
                <h3>{JSON.stringify(props.arr)}</h3>
                <div>
                    <Button onClick={this.depositMoneyHandler} type={"primary"}>+2</Button>
                    <Button onClick={this.withdrawMoneyHandler} type={"text"}>-1(异步)</Button>
                    <Button onClick={this.bankruptHandler} type={"dashed"}>初始化</Button>
                </div>
            </div>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToToProps)(ReduxClass);
