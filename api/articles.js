import {request} from '@/plugins/request'
// 获取公共文章列表
export const getArticles = (params) => {
	return request({
		method: 'GET',
		url: '/api/articles',
		params,
	})
}
// 获取关注的文章列表
export const getFeedArticles = (params) => {
	return request({
		method: 'GET',
		url: '/api/articles/feed',
		params,
	})
}
export const addFavorite = (slug) => {
	return request({
		method: 'POST',
		url: `/api/articles/${slug}/favorite`,
	})
}
export const deleteFavorite = (slug) => {
	return request({
		method: 'DELETE',
		url: `/api/articles/${slug}/favorite`,
	})
}
export const getArticle = (slug) => {
	return request({
		method: 'GET',
		url: `/api/articles/${slug}`,
	})
}
export const getComments = (slug) => {
	return request({
		method: 'GET',
		url: `/api/articles/${slug}/comments`,
	})
}
