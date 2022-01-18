import moment from 'moment-timezone'
import { TIME_FORMAT, TIMEZONE_DEFAULT } from '@/configs/site'
import Store from '@/store'
import { ElMessage } from 'element-plus'

// ============================= 共用時間 =============================

// 取的當天日期 YYYY-MM-DD
export function getToday (time) {
  const daliyFormat = 'YYYY-MM-DD'
  const today = moment().format(daliyFormat)

  return time ? `${today} ${time}` : today
}

// 取的當下時間 YYYY-MM-DD-HH-mm-ss
export function getCurrentTime () {
  // YYYY-MM-DD HH:mm:ss
  return moment().format(TIME_FORMAT)
}

// 後台時區時間轉換到UTC時間
export function passToUTC (val, format = TIME_FORMAT) {
  // YYYY-MM-DD HH:mm:ss
  return moment(val).utc().format(format)
}

// 將時間轉換為RFC3339
export function rfc3339Transform (time) {
  return moment(time).format()
}

// RFC3339 時間格式 轉成 當前時區格式
export function rfc3339TimeFormatter (row, column, cellValue) {
  const result = moment(cellValue).format(TIME_FORMAT)

  return result === 'Invalid date' ? '' : result
}

// 轉換時間至當前時區
export function timeFormatter (row, column, cellValue) {
  const timezone = Store.state.timezone ? Store.state.timezone : TIMEZONE_DEFAULT
  const result = moment.tz(cellValue, 'UTC').tz(timezone).format(TIME_FORMAT)

  return result === 'Invalid date' ? '' : result
}

export function getDateString (date) {
  return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`
}

// ============================= 物件共用 ============================

// 物件深度複製
export function deepCopy (val) {
  const refList = new WeakMap()
  return _copy(val)

  function _copy (obj) {
    const isArray = Array.isArray(obj)
    const isObject = Object.prototype.toString.call(obj) === '[object Object]'

    if (!isArray && !isObject) return obj
    if (refList.has(obj)) return refList.get(obj)

    const clone = isArray ? [] : {}
    refList.set(obj, clone)

    for (const prop of Object.keys(obj)) clone[prop] = _copy(obj[prop])
    return clone
  }
}

// ============================= function 共用 =============================

export const sleep = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve(0) }, time * 1000)
  })
}

// == call api ==
function verifyCallApiResult ({ value, verifyType, customVerify }) {
  let isPass = false

  if (typeof customVerify === 'function' && value !== undefined) {
    if (customVerify(value)) isPass = true
  } else if (verifyType !== undefined && customVerify === undefined && value !== undefined) {
    switch (verifyType) {
      case 'isObject':
        if (typeof value === 'object') isPass = true
        break
      case 'isArray':
        if (Array.isArray(value)) isPass = true
        break
      case 'isOnlyObject':
        if (typeof value === 'object' && !Array.isArray(value)) isPass = true
        break
    }
  }

  return isPass
}

// type: default:'getResult' || 'getBoolean'
// verifyType: default:'isObject' || 'isArray' || 'isOnlyObject'
export async function callApi ({ formData, customVerify, verifyType, apifunction, type }) {
  type = type || 'getResult'
  verifyType = customVerify === undefined && verifyType !== undefined ? verifyType : 'isObject'

  if (
    formData === undefined ||
    apifunction === undefined ||
    (type === 'getResult' && customVerify === undefined && verifyType === undefined) ||
    !['getResult', 'getBoolean'].includes(type)
  ) return ElMessage.warning('callApi函式缺少必要传入值')

  const api = apifunction
  return api({ body: formData })
    .then(res => {
      let result = null
      switch (type) {
        case 'getResult':
          if (verifyCallApiResult({ value: res, verifyType: verifyType, customVerify: customVerify })) result = res
          else ElMessage.error(('api-format-error'))
          break
        case 'getBoolean':
          result = true
          break
      }
      if (result !== null) return result
    })
    .catch(err => {
      ElMessage.error(err.message)
      if (type === 'getBoolean') return false
    })
}
