/**
 * 基于axios封装的请求模块
 */
import axios from 'axios'
// 创建请求对象
export const request = axios.create({
	baseURL: 'https://conduit.productionready.io',
})
// 通过插件机制获取到上下文对象（query、params、req、res、app、store...）
// 插件导出函数必须作为default成员
export default ({store}) => {
	// console.log(context)
	// 请求拦截器
	// 任何请求都要经过请求拦截器
	// 我们可以再请求拦截器中做一些公共的业务处理，例如统一设置token
	request.interceptors.request.use(
		function(config) {
			const {user} = store.state
			if (user && user.token) config.headers.Authorization = `Token ${user.token}`
			// 返回config请求配置对象
			return config
		},
		function(error) {
			//   如果请求失败（此时请求还没有发出去）就会进入这里
			// Do something with request error
			return Promise.reject(error)
		},
	)
}
