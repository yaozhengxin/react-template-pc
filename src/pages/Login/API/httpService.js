import Service from './../../../service/Service'

export function getMyExchangeList (params = {}) {
  const isShowResInConsole = false
  const isShowLoading = true
  const url = '/api/detail'
  return Service.get({ url, params, isShowResInConsole, isShowLoading }).then(res => {
    return Promise.resolve(res)
  }).catch(error => {
    return Promise.reject(error)
  })
}
