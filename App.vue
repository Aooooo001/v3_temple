<script setup>
	import {
		onLaunch,
		onShow,
		onError
	} from '@dcloudio/uni-app';
	import {
		ShoproInit
	} from './sheep';

	onLaunch(() => {
		// 隐藏原生导航栏 使用自定义底部导航
		// uni.hideTabBar();
		// 加载Shopro底层依赖
		ShoproInit();
	});

	onError((err) => {
		console.log('AppOnError:', err);
	});

	onShow(() => {

		// #ifdef APP-PLUS
		// 获取urlSchemes参数
		const args = plus.runtime.arguments;
		if (args) {}
		// 获取剪贴板
		uni.getClipboardData({
			success: (res) => {},
		});
		// #endif

	});
</script>

<style lang="scss">
	@import '@/sheep/scss/_tools.scss';
	@import "uview-plus/index.scss";

	page {
		background-color: #F3F3F3;
	}

	body {
		// font-family: PingFang SC;
	}
</style>