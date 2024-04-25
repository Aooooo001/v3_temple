import request from '@/sheep/request';
import {
	baseUrl
} from '@/sheep/config';

export default {
	getCode: (data) =>
		request({
			url: '/admin.api.captcha/getCaptcha',
			method: 'POST',
			data
		}),
	login: (data) =>
		request({
			url: '/admin.api.user/login',
			method: 'POST',
			data
		}),

};