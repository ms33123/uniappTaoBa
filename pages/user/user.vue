<template>
	<view class="main">
		<view class="userinfo">
			<view class="u-demo-block">
				<view class="u-demo-block__content">
					<u-row customStyle="margin-bottom: 10px">
						<u-col span="12">
							<view class="demo-layout bg">
								<u--image class="avatar" :showLoading="true" :src="src" width="100rpx" height="100rpx"
									shape="circle"></u--image>
								<span class="nick">登录/注册</span>
								<span class="uid">点击登陆，享受更多精彩信息</span>
							</view>
						</u-col>
					</u-row>
				</view>
			</view>
		</view>
		<useremail />
		<MyServices />
		<Cell/>
	</view>
</template>

<script>
	import useremail from '../../components/useremail.vue'
	import MyServices from '../../components/MyServices.vue'
	import Cell from '../../components/Cell.vue'
	export default {
		data() {
			return {
				src: 'https://cdn.uviewui.com/uview/album/1.jpg'
			}
		},
		components: {
			useremail,
			MyServices,
			Cell
		}
	}
</script>

<style lang="scss">
	.main {
		margin: 20rpx 20rpx 0 20rpx;
	}

	.demo-layout {
		position: relative;
		height: 150rpx;
		border-radius: 4px;

		.avatar {
			position: absolute;
			top: 50%;
			left: 40rpx;
			transform: translateY(-50%);
		}

		.nick {
			position: absolute;
			top: 50%;
			transform: translateY(-80%);
			left: 160rpx;
			font-weight: 600;
		}

		.uid {
			position: absolute;
			top: 58%;
			left: 160rpx;
			color: #a1a6b6;
			font-size: 24rpx;
		}
	}

	.bg {
		background-color: #fff;
	}
</style>
