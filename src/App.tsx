import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { fetchPerTableData, PermissionTableInitialState } from "./store/demo";

function App() {
    const { items, isFetching, isFail, failMsg } = useSelector<
        RootState,
        PermissionTableInitialState
    >((state) => {
        return state.Permission;
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPerTableData());
    }, []);

    return (
        <h1>
            <div>是否请求: {String(isFetching)}</div>
            <div>是否请求失败: {String(isFail)}</div>
            <div>失败原因:{failMsg.length > 0 ? failMsg : "未设置"}</div>
            <div>展示数据: {items?.length > 0 ? items : "[]"}</div>
        </h1>
    );
}

export default App;
