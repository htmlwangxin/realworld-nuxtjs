/**
 * nuxt.js配置文件
 */
module.exports = {
	router: {
		linkActiveClass: 'active', // 当前路由的class
		// 自定义路由规则
		extendRoutes(routes, resolve) {
			// console.log(routes)
			// 清除nuxt.js基于pages目录默认生成的路由表规则
			routes.splice(0)
			routes.push(
				...[
					{
						path: '/',
						component: resolve(__dirname, 'pages/layout/'),
						children: [
							{
								path: '', // 默认子路由
								name: 'home',
								component: resolve(__dirname, 'pages/home/'),
							},
							{
								path: 'login',
								name: 'login',
								component: resolve(__dirname, 'pages/login/'),
							},
							{
								path: 'register',
								name: 'register',
								component: resolve(__dirname, 'pages/login/'),
							},
							{
								path: 'profile/:username',
								name: 'profile',
								component: resolve(__dirname, 'pages/profile/'),
							},
							{
								path: 'settings',
								name: 'settings',
								component: resolve(__dirname, 'pages/settings/'),
							},
							{
								path: 'editor',
								name: 'editor',
								component: resolve(__dirname, 'pages/editor/'),
							},
							{
								path: 'article/:slug',
								name: 'article',
								component: resolve(__dirname, 'pages/article/'),
							},
						],
					},
				],
			)
			// routes.push({
			//   name: 'custom',
			//   path: '*',
			//   component: resolve(__dirname, 'pages/404.vue')
			// })
		},
	},
	server: {
		host: '0.0.0.0', // 部署到需要监听所有网卡地址
		port: 3001,
	},
	// 注册插件
	plugins: ['~/plugins/request.js', '~/plugins/dayjs.js'],
}
