<template>
	<view>
		<u-cell-group :border="false">
			<u-cell title="个人设置" isLink :border="false"></u-cell>
			<u-cell title="账号与安全"  isLink :border="false"></u-cell>
			<u-cell title="实名认证"  isLink :border="false"></u-cell>
			<u-cell title="关于淘吧"  isLink :border="false"></u-cell>
			<u-cell title="社区公约"  isLink :border="false"></u-cell>
		</u-cell-group>
		<u-button text="退出登录" type="error"></u-button>
	</view>
</template>

<script>
	export default {
		name: "Cell",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
.u-cell{
	background-color: #fff;
	border-radius: 10rpx;
	margin-top: 10rpx;
}
.u-button{
	margin-top: 20rpx;
}
</style>
