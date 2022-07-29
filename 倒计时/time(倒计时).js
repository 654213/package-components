export function refreshTime() {
  const dt = new Date() // 得到当前时间
  let text = ''
  const hours = dt.getHours()
  const y = dt.getFullYear() // 当前年份
  const m = dt.getMonth() + 1 // 当前月份，getMonth 返回值是 0-11 对应 1-12月，因此全部加1
  const d = dt.getDate()
  const week = dt.getDay()
  if (week == 0) {
    text = '星期日'
  } else if (week == 1) {
    text = '星期一'
  } else if (week == 2) {
    text = '星期二'
  } else if (week == 3) {
    text = '星期三'
  } else if (week == 4) {
    text = '星期四'
  } else if (week == 5) {
    text = '星期五'
  } else if (week == 6) {
    text = '星期六'
  }

  let h = dt.getHours()
  if (h < 10) h = '0' + h
  let i = dt.getMinutes()
  if (i < 10) i = '0' + i
  let s = dt.getSeconds()
  if (s < 10) s = '0' + s

  const str = y + '年' + m + '月' + d + '日 ' + h + '时' + i + '分' + s + '秒' + ' '
  return str + text
}

export function refreshTime2() {
  const dt = new Date() // 得到当前时间
  let text = ''
  const hours = dt.getHours()
  const y = dt.getFullYear() // 当前年份
  const m = dt.getMonth() + 1 // 当前月份，getMonth 返回值是 0-11 对应 1-12月，因此全部加1
  const d = dt.getDate()
  const week = dt.getDay()
  if (week == 0) {
    text = '星期日'
  } else if (week == 1) {
    text = '星期一'
  } else if (week == 2) {
    text = '星期二'
  } else if (week == 3) {
    text = '星期三'
  } else if (week == 4) {
    text = '星期四'
  } else if (week == 5) {
    text = '星期五'
  } else if (week == 6) {
    text = '星期六'
  }

  let h = dt.getHours()
  if (h < 10) h = '0' + h
  let i = dt.getMinutes()
  if (i < 10) i = '0' + i
  let s = dt.getSeconds()
  if (s < 10) s = '0' + s

  const str = y + '.' + m + '.' + d + '' + text + h + '.' + i + '.' + s + ' '
  return str
}
