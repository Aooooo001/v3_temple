<!-- 页面  -->
<template>
	<view class="">
		<!-- 首页 -->
		<up-button type="primary" text="确定"></up-button>
		<view class="ssss ss-flex ss-row-center ss-row-center">
			ssss
		</view>
			{{$store('app').userName}}
	</view>
</template>


<script setup>
	import {
		ref
	} from 'vue'
	import $store from '@/sheep/store';
	$store('app').getUserName('张三');
</script>

<style lang="scss" scoped>
	.ssss {
		width: 400rpx;
		height: 400rpx;
		border: 1px solid;
	}
</style>