<template>
	<view>
		<view class="u-demo-block">
			<view class="u-demo-block__content">
				<u-row customStyle="margin-bottom: 10px" gutter="20">
					<u-col span="6">
						<view class="demo-layout bg">
							<u--image class="icon" src="../../static/img/user/goods.png" width="80rpx" height="80rpx"></u--image>
							<span class="title">我发布的</span>
						</view>
					</u-col>
					<u-col span="6">
						<view class="demo-layout bg">
							<u--image class="icon" src="../../static/img/user/favor_fill.png" width="80rpx" height="80rpx"></u--image>
							<span class="title">我收藏的</span>
						</view>
					</u-col>
				</u-row>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "MyServices",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.demo-layout {
		position: relative;
		height: 150rpx;
		border-radius: 6px;
		background-color: #fff;
		.icon{
			position: absolute;
			top: 50%;
			left: 40rpx;
			transform: translateY(-50%);
		}
		.title{
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			left: 150rpx;
			font-weight: 600;
			font-size: 32rpx;
		}
	}
</style>
