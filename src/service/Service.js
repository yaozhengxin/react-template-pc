import axios from 'axios'
import { notification } from 'antd';
import { createHashHistory } from 'history';
const history = createHashHistory();

axios.defaults.timeout = 5000
axios.defaults.baseURL = ''

const openNotificationWithIcon = ({type='error',message='error',description='呀～，网络不给力'}={}) => {
  notification[type]({
    message,
    description
  });
};



// const LOGIN_HASH = '#login'

// http request 拦截器
// config  修改请求的所有配置
axios.interceptors.request.use(
  config => {
    if (history.location.pathname !== '/login') {
      const token = localStorage.getItem('__config_center_token')
      if (token == null) {
        history.replace({
          pathname: '/login',
          search: `?query=${encodeURIComponent(window.location.href)}`
        });
        return false
      } else {
        config.headers['token'] = token
      }
    }
    console.log(history);

    config.data = JSON.stringify(config.data)
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    // config.headers.referer = '//supervippre.cnsuning.com'
    // config.headers.host = 'supervippre.cnsuning.com'
    // if(token){
    //   config.params = {'token':token}
    // }
    return config
  },
  error => {
    openNotificationWithIcon()
    return Promise.reject(error)
  }
)

// http response 拦截器
// 同意处理返回结果
axios.interceptors.response.use(
  response => {
    // if (response.data.errCode == 2) {
    //     router.push({
    //         path: "/login",
    //         querry: { redirect: router.currentRoute.fullPath }//从哪个页面跳转
    //     })
    // }
    return response
  },
  error => {
    if (error.response !== undefined) {
      switch (error.response.status) {
        case 401:
          history.replace({
            pathname: '/login',
            search: `?query=${encodeURIComponent(window.location.href)}`
          });
          break
        case 403:
          history.replace({
            pathname: '/401'
          });
          break
        default:
          openNotificationWithIcon({message:error.response.status,description:error.response.data})
      }
      return Promise.resolve(error.response)
    }
    return Promise.reject(error)
  }
)

class Service {
  /**
       * 请求服务端接口函数,返回promise
       * @param {string} url 请求地址
       * @param {Object} paramters 请求参数
       * @param {string} type 请求类型(默认get方式)
       * @returns {Object} 返回的promise对象
       */
  // static reqServer (url, paramters = {}, type = 'GET') {

  // }

  /**
   * 封装get方法
   * @param url
   * @param data
   * @returns {Promise}
   */
  static get = ({ url, params = {}, isShowResInConsole = false, isShowLoading = false }) => {
    // const toast = isShowLoading && Toast.loading({
    //   duration: 0, // 持续展示 toast
    //   forbidClick: true, // 禁用背景点击
    //   message: '正在加载'
    // })
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: { ...params, _t: new Date().getTime() }
      }).then(response => {
        isShowResInConsole && console.info(`%c get回调:server:url=${url}  \n [result]=`, 'color:red;font-size:16px', response.data)
        // isShowLoading && toast.clear()
        resolve(response.data)
      }).catch(err => {
        // isShowLoading && toast.clear()
        reject(err)
      })
    })
  }

  /**
   * 封装post请求
   * @param url
   * @param data
   * @returns {Promise}
   */
  static post = ({ url, data = {}, isShowResInConsole = false, isShowLoading = false }) => {
    // const toast = isShowLoading && Toast.loading({
    //   duration: 0, // 持续展示 toast
    //   forbidClick: true, // 禁用背景点击
    //   message: '正在加载'
    // })
    return new Promise((resolve, reject) => {
      axios.post(url, data).then(response => {
        isShowResInConsole && console.info(`%c post回调:server:url=${url}  \n [result]=`, 'color:red;font-size:16px', response.data)
        // isShowLoading && toast.clear()
        resolve(response.data)
      }, err => {
        // isShowLoading && toast.clear()
        reject(err)
      })
    })
  }

  /**
  * 封装patch请求
  * @param url
  * @param data
  * @returns {Promise}
  */
  static patch = (url, data = {}) => {
    return new Promise((resolve, reject) => {
      axios.patch(url, data)
        .then(response => {
          resolve(response.data)
        }, err => {
          reject(err)
        })
    })
  }

  /**
  * 封装put请求
  * @param url
  * @param data
  * @returns {Promise}
  */
  static put = (url, data = {}) => {
    return new Promise((resolve, reject) => {
      axios.put(url, data)
        .then(response => {
          resolve(response.data)
        }, err => {
          reject(err)
        })
    })
  }

  /**
   * jsonp方式请求
   * @param url 请求url
   * @param paramters 请求参数
   * @param timeout 超时时间，默认30秒
   * @returns {Function}
   */
  static jsonp = function (url, paramters, timeout = 30000) {
    // if (Const && Const.server) {
    //     url = Const.server + url;
    // }

    var global = window
    var body = document.body

    return new Promise(function (resolve, reject) {
      // 回调参数名称
      var scriptID = Math.round(100000 * Math.random())
      var callbackName = 'jsonp_callback_' + scriptID
      var script = document.createElement('script')
      script.id = scriptID
      // 请求公共参数处理
      var commonData = ''
      if (typeof (Service.requestPara) === 'object') {
        for (let key in Service.requestPara) {
          // 请求参数拼接
          if (Service.requestPara.hasOwnProperty(key)) {
            commonData += key + '=' + encodeURIComponent(Service.requestPara[key]) + '&'
          }
        }
        commonData += 't=' + new Date().getTime()
      } else {
        commonData += 't=' + new Date().getTime()
      }

      // console.info('jsonp请求公共参数commonData=', commonData);

      // 请求参数
      let reqData = ''
      if (typeof (paramters) === 'object') {
        for (let key in paramters) {
          // 请求参数拼接
          if (paramters.hasOwnProperty(key)) {
            // 传参为数组时， 需要解析成json字符串
            if (paramters[key] instanceof Array) {
              reqData += key + '=' + encodeURIComponent(JSON.stringify(paramters[key])) + '&'
            } else {
              reqData += key + '=' + encodeURIComponent(paramters[key]) + '&'
            }
          }
        }
        reqData = reqData.substr(0, reqData.length - 1)
      }

      if (reqData || commonData) {
        url = url + (url.indexOf('?') >= 0 ? '&' : '?') + reqData + '&' + commonData
      }

      script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName

      // If we fail to get the script, reject the promise.
      script.onerror = function (err) {
        /* eslint-disable */
        reject(`失败：请求, ${err}`)
        /* eslint-enable */
      }

      body.appendChild(script)
      if (/callback=?/.test(url)) {
        url = url.replace('=?', '=' + callbackName)
      }

      global[callbackName] = function (data) {
        // console.info(`%c jsonp请求url=${url} \n  [result]=`, 'color:red;font-size:16px', data)
        // if(data && data.errno !==0) {
        //     Toast.toastInstance(`服务器开小差:${data.errstr}`,2000);
        // }
        if (data) {
          resolve(data)
        } else {
          /* eslint-disable */
          reject('请求失败')
          /* eslint-enable */
        }

        // Clean up.
        global[callbackName] = null
        delete global[callbackName]
        if (document.getElementById(scriptID)) {
          body.removeChild(script)
        }
      }

      // 十秒超时处理
      setTimeout(function () {
        if (document.getElementById(scriptID)) {
          console.log('请求超时：', script.src)
          global[callbackName] = null
          delete global[callbackName]
          body.removeChild(script)
        }
      }, timeout)
    })
  };
}

export default Service
