//近几天
export function getDate(number, isShowYear) {
    let myDate = new Date() // 获取今天日期
    myDate.setDate(myDate.getDate() - 1)
    let dateArray = []
    let dateTemp
    let flag = 1
    for (let i = 0; i < number; i++) {
        dateTemp = (myDate.getMonth() + 1) + '-' + myDate.getDate();
        dateTemp = isShowYear ? myDate.getFullYear() + '-' + dateTemp : dateTemp;
        dateArray.push(dateTemp)
        myDate.setDate(myDate.getDate() - flag)
    }
    return dateArray.reverse();
}
//近几个月份
export function getDateMonth(number) {
    let myDate = new Date() // 获取当月
    myDate.setMonth(myDate.getMonth() + 1, 1)
    let dateArray = []
    let dateTemp
    let flag = 1
    for (let i = 0; i < number; i++) {
        myDate.setMonth(myDate.getMonth() - flag)
        dateTemp = myDate.getFullYear() + '-' + (myDate.getMonth() + 1)
        dateArray.push(dateTemp)
    }
    return dateArray.reverse();
}
//近几个月份  去掉年份
export function getDMonth(number, isShowYear) {
    let myDate = new Date() // 获取当月
    myDate.setMonth(myDate.getMonth() + 1, 1)
    let dateArray = []
    let dateTemp
    let flag = 1
    for (let i = 0; i < number; i++) {
        myDate.setMonth(myDate.getMonth() - flag)
        dateTemp = myDate.getMonth() + 1;
        dateTemp = isShowYear ? myDate.getFullYear() + '-' + dateTemp : dateTemp;
        dateArray.push(dateTemp)

    }
    return dateArray.reverse();
}

//近几年
export function getDateYear(number) {
    let myDate = new Date() // 获取当年
    let dateArray = []
    let dateTemp
    let flag = 1
    for (let i = 0; i < number; i++) {
        dateTemp = myDate.getFullYear();
        dateArray.push(dateTemp)
        myDate.setFullYear(myDate.getFullYear() - flag)
    }
    return dateArray.reverse();
}