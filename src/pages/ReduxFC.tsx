import React from 'react';
import {Button} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {InfoActions, RootStoreState} from "../store/";

const ReduxFC: React.FC = () => {

    const dispatch = useDispatch();

    const {increment, decrement, reset} = bindActionCreators(InfoActions, dispatch);

    const info = useSelector((state: RootStoreState) => state.info);

    return (
        <div>
            <h1>{info.num}</h1>
            <h2>{JSON.stringify(info.arr)}</h2>
            <Button onClick={() => {increment(3)}} type={"primary"}>+3</Button>
            <Button onClick={() => {decrement(4)}} type={"text"}>-4(异步)</Button>
            <Button onClick={() => {reset()}} type={"dashed"}>初始化</Button>
        </div>
    );
}

export default ReduxFC;
