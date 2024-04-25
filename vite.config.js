import { loadEnv } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import path from 'path';
// vite-plugin-compression是一个基于Vite的插件,用于gzip或Brotli压缩你的资源，从而减少页面的加载时间和网络带宽，提高用户访问速度和体验。
// import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default (command, mode) => {
	const env = loadEnv(mode, __dirname, 'Li_');
	return {
		envPrefix: "Li_",
		plugins: [
			uni(),
		],
		server: {
			host: true,
			// open: true,
			port: env.Li_DEV_PORT,
			hmr: {
				overlay: true,
			},
		},
	};
};
