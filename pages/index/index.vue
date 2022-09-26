<template>
	<view class="content" >
		<!-- search -->
		<view>
			<view class="u-demo-block">
				<view class="u-demo-block__content">
					<u-row customStyle="margin-bottom: 10px">
						<u-col span="12">
							<view class="demo-layout bg-purple-light">
								<u-search :clearabled="true" shape="round"></u-search>
							</view>
						</u-col>
					</u-row>
				</view>
			</view>
		</view>
		<view class="lunbo">
			<u-swiper :list="list3" height="280rpx" indicator indicatorMode="line" circular></u-swiper>
		</view>
		<view class="tabs">
			<u-tabs :list="list1" @click="click" :scrollable="false"></u-tabs>
		</view>
		<view class="goods">
			<goods/>
		</view>
	</view>
</template>

<script>
	import goods from '../../pages/goods/goods.vue'
	export default {
		data() {
			return {
				list1: [{
					name: '推荐',
				}, {
					name: '最新',
				}],
				list3: [
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
				],
				goodsList:[]
			}
		},
		components: {
			goods
		},
		methods: {
		},
		mounted() {
			this.$store.dispatch('getData')
		},
		onPullDownRefresh(){
			setTimeout(()=>{
				this.$store.dispatch('getData')
				uni.stopPullDownRefresh()
			},1000)
		}
	}
</script>

<style lang="scss">
	.content {
		position: relative;
		width: 100%;
		background-color: #f8f8f8;
	}

	.demo-layout {
		padding: 16rpx 0 0 0;
		height: 64rpx;
		margin: 10rpx 10rpx 0 10rpx;
		border-radius: 4px;
	}

	.bg-purple-light {
		background-color: #fff;
	}

	.lunbo {
		height: 300rpx;
		margin-left: 10rpx;
		margin-right: 10rpx;
	}

	.tabs {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	}

	.goods {
		margin-top: 40rpx;
	}

	uni-body {
		background-color: #f8f8f8;
	}
</style>
