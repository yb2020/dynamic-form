import axios from 'axios'
// import store from '@/store'

// create an axios instance
const serviceAPI = axios.create({
  baseURL: process.env.VUE_APP_API_PATH, // url = base url + request url
  withCredentials: true// send cookies when cross-domain requests
})

// request interceptor
serviceAPI.interceptors.request.use(
  config => {
    // do something before request is sent
    if (!config.timeout) {
      config.timeout = 5000
    }

    // if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      //config.headers['Authorization'] = getToken()
    // }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
serviceAPI.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data

    // if the custom code is not 20000, it is judged as an error.
    if (res.code && res.code !== 20000) {
      // Message({
      //   message: res.message || 'error',
      //   type: 'error',
      //   duration: 5 * 1000
      // })

      // // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      //   // to re-login
      //   MessageBox.confirm('您的身份认证已过期，您可以取消以停留在此页，或重新登录', '身份过期提醒', {
      //     confirmButtonText: '重新登录',
      //     cancelButtonText: '取消',
      //     type: 'warning'
      //   }).then(() => {
      //     store.dispatch('user/resetToken').then(() => {
      //       location.reload()
      //     })
      //   })
      // }
      return Promise.reject(res.message || 'error')
    } else {
      return res
    }
  },
  error => {
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default serviceAPI
