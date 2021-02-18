import { Action } from "redux";
import {
    PermissionTableAction,
    REQUEST_TABLE_DATA,
    REQUEST_TABLE_FAIL,
    REQUEST_TABLE_SUCCESS,
} from "./constant";

/**
 * 一个权限表格数据 ✅
 * 请求 ✅
 * 分页
 * 删除
 * 编辑
 * 重新加载
 */

export interface PermissionTableInitialState {
    isFetching: boolean; // 是否请求
    isFail: boolean; // 是否请求失败
    failMsg: string; // 失败原因
    items: any[]; // 结果数据
}

const permissionTableInitialState: PermissionTableInitialState = {
    isFetching: false,
    isFail: false,
    failMsg: "",
    items: [],
};

export const permissionTable = (
    state = permissionTableInitialState,
    action: PermissionTableAction
): PermissionTableInitialState => {
    switch (action.type) {
        case REQUEST_TABLE_DATA: {
            return {
                ...state,
                isFetching: true,
                isFail: false,
            };
        }

        case REQUEST_TABLE_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                items: action.items,
            };
        }

        case REQUEST_TABLE_FAIL: {
            return {
                ...state,
                isFetching: false,
                isFail: true,
                failMsg: action.failMessage,
            };
        }

        default:
            return state;
    }
};
