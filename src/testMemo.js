// более производительный вариант мемоизации
const difficultCalculation = (() => {
    let memoMap = {};
    return (a) => {
        if (memoMap[a] !== undefined) {
            return memoMap[a];
        }

        console.log("calc");
        memoMap[a] = a * a;
        return memoMap[a];
    }
})();

console.log(difficultCalculation(2)); // calc, 4
console.log(difficultCalculation(4)); // calc, 16
console.log(difficultCalculation(2)); // 4 <---------
console.log(difficultCalculation(2)); // 4


// менее производительный вариант мемоизации

// const difficultCalculation = (() => {
//     let prevParam;
//     let prevResult;

//     return (a) => {
//         if (prevParam == a) {
//             return prevResult;
//         }

//         console.log("calc");
//         prevResult = a * a;
//         prevParam = a;
//         return prevResult;
//     }
// })();

// console.log(difficultCalculation(2)); // calc, 4
// console.log(difficultCalculation(4)); // calc, 16
// console.log(difficultCalculation(2)); // calc, 4 <---------
// console.log(difficultCalculation(2)); // 4 <---------------


