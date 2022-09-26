<template>
	<view class="goodsList" :num="$store.state.num">
		<view class="goods-item" v-for="item in $store.state.goodData" :key="item.id">
			<u--image :showLoading="true" radius="20" :src="item.img"  height="360rpx" @click="click"></u--image>
			<view class="title">
				<u--text :lines="2" :text="item.title" size="26rpx"></u--text>
				<view class="price">
					<u--text mode="price" :text="item.price" bold color="#ff5500" size="30rpx"></u--text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {

		},
		mounted() {

		}
	}
</script>

<style lang="scss" scoped>
	.goodsList {
		display: flex;
		padding: 50rpx;
		flex-wrap: wrap;
		justify-content: center;
		justify-content: space-between;
	}

	.goods-item {
		margin-top: 20rpx;
		background-color: #fff;
		border-radius: 20rpx;
	}
</style>
