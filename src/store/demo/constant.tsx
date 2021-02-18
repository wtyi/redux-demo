/**
 * 定义常量 以及action类型 interface
 */
import { Action } from "redux";

export const REQUEST_TABLE_DATA = "permission/REQUEST_TABLE_DATA";
export const REQUEST_TABLE_SUCCESS = "permission/REQUEST_TABLE_SUCCESS";
export const REQUEST_TABLE_FAIL = "permission/REQUEST_TABLE_FAIL";

interface RequestTableDataAction extends Action<typeof REQUEST_TABLE_DATA> {}

interface RequestTableSuccessAction
    extends Action<typeof REQUEST_TABLE_SUCCESS> {
    items: any[];
}
interface RequestTableFailAction extends Action<typeof REQUEST_TABLE_FAIL> {
    failMessage: string;
}

export type PermissionTableAction =
    | RequestTableDataAction
    | RequestTableSuccessAction
    | RequestTableFailAction;
