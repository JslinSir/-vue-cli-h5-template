/**
 * 基于 fetch 的 异步封装
 */
import { getStoragedData } from '@/helpers/storage'
import { CODE_MESSAGE, TOKEN_KEY } from '@/constants'
import { Toast } from 'vant'

const TIMEOUT = 20 * 1000

// 公用header参数
const commonHeaders = function () {
  const headers = new Object()
  getStoragedData(TOKEN_KEY)
  const _token = getStoragedData(TOKEN_KEY)
  // 系统信息
  headers['Content-Type'] = 'application/json'
  if (_token) {
    headers['x-http-token'] = _token
  }
  return headers
}

// 超时
const timeOutPromise = () =>
  new Promise((_, reject) => {
    setTimeout(() => reject(new Error(CODE_MESSAGE.timeOut)), TIMEOUT)
  })

const fetchRequest = param => {
  let { url, body, method, headers } = param || {}
  method = method || fetchRequest.defaultParameters.method
  method = method.toUpperCase()
  headers = { ...fetchRequest.defaultParameters.header, ...headers }
  body = JSON.stringify(body)
  return fetch(url, { method, body, headers })
}

// 默认的请求参数
fetchRequest.defaultParameters = {
  body: {},
  header: commonHeaders(),
  method: 'POST'
}

// 超时竞赛
export const fetchTimeOutRace = params => {
  const _fetchRequest = fetchRequest(params)
  const _timeOutPromise = timeOutPromise()
  return Promise.race([_fetchRequest, _timeOutPromise])
}

// 请求封装
const request = async params => {
  const response = await fetchTimeOutRace(params)
    .then(res => checkHttpStatus(res))
    .then(res => res.json())
    .catch(err => {
      Toast(err.message || '接口请求错误')
      throw err
    })
  if (response) {
    const { code } = response
    if (code !== 200) {
      return Promise.reject(response)
    }
    Toast('test')
    return Promise.resolve(response)
  }
}

// 响应状态判断
const checkHttpStatus = res => {
  if (res.status >= 200 && res.status < 304) {
    return res
  }
  throw new Error(CODE_MESSAGE.http[res.status] || res.statusText)
}

export const GET = (url, body, options) => request({ url, body, method: 'GET', ...options })
export const POST = (url, body, options) => request({ url, body, method: 'POST', ...options })
export default {
  GET,
  POST
}
