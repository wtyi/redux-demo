import {
    REQUEST_TABLE_DATA,
    REQUEST_TABLE_FAIL,
    REQUEST_TABLE_SUCCESS,
    PermissionTableAction,
} from "./constant";

export const changeTableData = (): PermissionTableAction => {
    return {
        type: REQUEST_TABLE_DATA,
    };
};

export const changeTableSuccess = (items: any[]): PermissionTableAction => {
    return {
        type: REQUEST_TABLE_SUCCESS,
        items,
    };
};

export const changeTableFail = (failMessage: string): PermissionTableAction => {
    return {
        type: REQUEST_TABLE_FAIL,
        failMessage,
    };
};

export const fetchPerTableData = () => {
    return async function (dispath: (a: any) => void) {
        dispath(changeTableData());
        const sleep = (time: number) =>
            new Promise((resolve, reject) =>
                setTimeout(() => {
                    resolve("");
                }, time)
            );
        await sleep(3000);
        fetch("http://171.15.150.162:8952/api/login", {
            method: "POST",
            body: JSON.stringify({
                username: "wangtianyi",
                password: "qwe112233",
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.error_code == 200) {
                    console.log(res);
                } else {
                    dispath(changeTableFail(res.msg));
                }
            })
            .catch((err) => {
                dispath(changeTableFail(err));
            })
            .finally(() => {});
    };
};
