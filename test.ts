


// const obj = {
//     [Symbol.iterator]: function () {
//         let i = 0
//         return {
//             next: () => {
//                 return {
//                     value: ++i,
//                     done: i >= 5
//                 }
//             }
//         }
//     }
// }


// for (let o of obj) {
//     console.log(o)
// }

// // 原生数组
// const arr = [1, 2]
// console.log(arr[Symbol.iterator]().next())


// // map and set
// const map = new Map()
// map.set("name", "wangtianyi")
// map.set("age", 21)
// console.log(map[Symbol.iterator]().next())

// const set = new Set()
// set.add("wty")
// set.add(21)
// console.log(set[Symbol.iterator]().next())




// {
//     next = () => {
//         return {
//             value:any,
//             done:boolean
//         }
//     }
// }



function* ab() {
    const result = yield 1;
    const result1 = yield 2 + result
    return result1
}

console.log(ab().next())
console.log(ab().next(2))