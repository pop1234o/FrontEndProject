
// ========Promise案例=========
// console.log('0');
// const promise = new Promise(function (resolve, reject) {
//     console.log('执行了');
//     // ?做一些异步操作，最终会调用下面两者之一:
//     //
//     //   resolve(someValue); // fulfilled
//     // ?或
//     //   reject("failure reason"); // rejected
//     resolve('成功了')
// } /* executor */);
// console.log('1');

// promise.then(function (successMessage) {
//     console.log(successMessage);
// }).catch(function (err) {
//     console.log(err);
// });
// console.log('2');

// ======async案例======
async function testAsync() {
    console.log(1);
    
    return "hello async";
}

const result = testAsync();
console.log(2);

// console.log(result);返回一个
result.then(result=>{
    console.log(result);
});

console.log(3);








