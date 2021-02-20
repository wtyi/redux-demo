import { all, call, delay, put, takeEvery, take, fork, takeLatest } from "redux-saga/effects"


// redux 流程 view -> methods -> dispatch -> action -> reducer -> view
// redux-thunk 破坏原本的dispatch 判断dispatch的类型。
// redux-saga 
// all 等待并执行多个 Generator(saga任务) 完成 | 阻塞
// call 执行函数 fn,args or this,fn,args or [this,fn],args | 阻塞取决于执行的函数 执行promise会将结果返回
// apply 与上述功能相似 传参类似 es apply | 与上述一致
// delay 等待延迟 | 阻塞。。。
// take 等待action执行 | 阻塞
// takeEvery 等待action触发 无限并行执行  参数 action,generatorFN | 不阻塞
// takeLatest 大致与上述一致 每次执行新的任务 取消之前的
// fork 理解为新开saga任务 generatorFN | 不阻塞


export function* helloSagas() {
    console.log("hello sagas")
}





export function* incrementAsync() {
    yield call(delay, 1000)
    yield put({ type: "INCREMENT" })
}

export function* watchIncrementAsync() {
    yield takeEvery("INCREMENT_ASYNC", incrementAsync)
}


export function* rootSaga() {
    yield all([
        helloSagas(),
        watchIncrementAsync()
    ])
}