<template>
	<view>
		<view class="u-demo-block">
			<view class="u-demo-block__content">
				<u-row customStyle="margin-bottom: 10px">
					<u-col span="10" offset="1">
						<view class="demo-layout bg">

						</view>
					</u-col>
				</u-row>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "useremail",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.demo-layout {
		height: 80rpx;
		border-radius: 4px 4px 0px 0px;
	}

	.bg {
		background-color: #f2ddaf;
	}
</style>
