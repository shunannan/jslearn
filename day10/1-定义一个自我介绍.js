// function jieshao() {
//     console.log("大家好，我是xxx")
// }
// jieshao();


// let jieShao = function (name,chineseScore,mathScore) {
//     console.log(`我的名字是: ${name},我的语文成绩为: ${chineseScore},我的数学成绩为: ${mathScore}`);
// }
// jieShao('书南',100,100)


// let add = function (num1, num2) {
//     console.log(num1+num2)
// }
// add(10, 20)

// let jieShao = function (obj) {
//     let name = obj.name
//     let banji = obj.banji || '三班'
//     let yuwen = obj.yuwen
//     let math = obj.math
//     let english = obj.english || 60
//     let total = yuwen + math + english;
//     console.log(`我的姓名是：${name}, 班级为：${banji}, 语文成绩是：${yuwen}, 数学成绩是：${math}, 成绩是：${english}`)

// }
// jieShao({
//     banji: "二班",
//     name: '南南',
//     yuwen: 80,
//     math: 90,
//     english: 90
// })

// jieShao({
//     name: '娜娜',
//     yuwen: 90,
//     math: 100,
// })

// let countTotle = function (num1, num2, callback) {
//     totle = num1 + num2;
//     callback(totle)
// }
// countTotle(1, 4, (totle) => {
//     console.log(`两数的和为：${totle}`);
// })


// let countTotal = function (obj, callback) {
//     let name = obj.name
//     let country = obj.country
//     let english = obj.english
//     let math = obj.math
//     let sport = obj.sport

//     let total = english + math + sport

//     callback(name, total)
// }

// countTotal({
//     name: '张三',
//     country: '中国',
//     english: 75,
//     math: 98,
//     sport: 96
// }, (name, total) => {
//     console.log(`大家好，我是${name}, 我的总成绩是${total}`);
// }) 



// 假设这个函数是第三方的，不可修改
// let processData = function (obj, callback) {
//     let name = obj.name
//     let country = obj.country
//     let english = obj.english
//     let math = obj.math
//     let sport = obj.sport

//     let total = english + math + sport
//     let avg = total / 3

//     obj.total = total
//     obj.avg = avg
//     // console.log(obj)

//     callback( obj)
// }

// processData({
//     name: 'jim',
//     country: 'england',
//     english: 90,
//     math: 88,
//     sport: 86
// }, function (obj) {
//     console.log(`my name is ${obj.name}, total is ${obj.total}, avg is ${obj.avg}`)
// })

// processData({
//     name: 'jim',
//     country: 'england',
//     english: 90,
//     math: 88,
//     sport: 86
// }, function (obj) {
//     console.log(`大家好，我是 ${obj.name}, 我的总成绩是：${obj.total}, 我的平均成绩是：${obj.avg}`)
// })

// 上面要打印： my name is jim, total is 256, avg is 89 


// 定义一个函数，计算总成绩
let total = getTotal({
    name: 'jim', 
    english: 88,
    math: 90,
    sport: 93
})

function getTotal(obj) {
    return obj.english + obj.math + obj.sport
}

console.log(total) 


