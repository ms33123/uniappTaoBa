<template>
	<view class="Form">
		<u-form :model="form" ref="Form">
			<u-form-item label="uid" borderBottom labelPosition="left" labelWidth="130rpx" style="display: none;">
				<u--input v-model="form.uid" border="none"></u--input>
			</u-form-item>
			<u-form-item label="商品名称" borderBottom labelPosition="left" labelWidth="130rpx">
				<u--input v-model="form.title" border="none"></u--input>
			</u-form-item>
			<u-form-item label="简介" borderBottom labelPosition="left" labelWidth="130rpx">
				<u--textarea v-model="form.content" placeholder="请输入内容" count height="200rpx"></u--textarea>
			</u-form-item>
			<u-form-item label="联系方式" borderBottom labelPosition="left" labelWidth="130rpx">
				<u--input v-model="form.Contact" border="none" placeholder="微信/手机"></u--input>
			</u-form-item>
			<u-form-item label="价格" borderBottom labelPosition="left" labelWidth="130rpx">
				<u--input v-model="form.price" border="none"></u--input>
			</u-form-item>
			<u-form-item label="图片" borderBottom labelPosition="left" labelWidth="130rpx">
				<u-upload :fileList="fileList1" @afterRead="afterRead" @delete="deletePic" name="1" height="120rpx"
					width="120rpx" multiple :maxCount="9" :deletable="false"></u-upload>
			</u-form-item>
			<button form-type="submit" @click="fabu(form)">提交</button>
		</u-form>
		<view>
			<u-modal :show="show" :title="title" :content='content' closeOnClickOverlay @confirm="close()"></u-modal>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				title: '提示',
				content: '发布成功',
				form: {
					uid: '1',
					title: '',
					content: '',
					Contact: '',
					price: '',
					imgurl: [],
				},
				fileList1: []
			}
		},
		methods: {
			// 删除图片
			deletePic(event) {
				console.log(event.name)
				this[`fileList${event.name}`].splice(event.index, 1)
			},
			// 新增图片
			async afterRead(event) {
				// 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(event.file)
				let fileListLen = this[`fileList${event.name}`].length
				lists.map((item) => {
					this[`fileList${event.name}`].push({
						...item,
						status: 'uploading',
						message: '上传中'
					})
				})
				for (let i = 0; i < lists.length; i++) {
					const result = await this.uploadFilePromise(lists[i].url)
					let item = this[`fileList${event.name}`][fileListLen]
					this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
						status: 'success',
						message: '',
						url: result
					}))
					fileListLen++
				}
			},
			uploadFilePromise(url) {
				const that = this
				return new Promise((resolve, reject) => {
					let a = uni.uploadFile({
						url:'https://www.imgtp.com/api/upload', 
						filePath: url,
						name: 'image',
						success: (res) => {
							const getData = JSON.parse(res.data)
							const getUrl = getData.data.url
							that.form.imgurl.push(getUrl)
							setTimeout(() => {
								resolve(res.data.data)
							}, 200)
						}
					});
				})
			},
			fabu(form) {
				var that = this
				const cover = form.imgurl[0]
				const imgurlData = JSON.stringify(form.imgurl)
				const serverUrl = "http://120.48.173.118:5000/publish/add"
				uni.request({
					method: "POST",
					url: serverUrl,
					header: {
						'Content-Type': 'application/x-www-form-urlencoded',
						Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJtczMzMTIzNCIsInBhc3N3b3JkIjoiIiwibmljayI6bnVsbCwiZW1haWwiOm51bGwsInVzZXJfcGljIjoiIiwiaWF0IjoxNjYwMjkzMTY5LCJleHAiOjE2NjAzMjkxNjl9.6uPlZuWqK7YUksAUUKTFbmFI6_eaOZLDD2YnkZqJ5CQ'
					},
					data: {
						uid: form.uid,
						title: form.title,
						content: form.content,
						Contact: form.Contact,
						price: form.price,
						img: cover,
						imgurl: imgurlData
					},
					success(res) {
						console.log(res)
						if (res.statusCode == 200) {
							that.content = "发布成功"
							that.show = true
							that.form = {
								uid: '1',
								title: '',
								content: '',
								Contact: '',
								price: '',
								imgurl: []
							}
						} else {
							that.content = "发布失败"
							that.show = true
						}
					}
				})
			},
			showToast(params) {
				this.$refs.uToast.show({
					...params,
					complete() {
						params.url && uni.navigateTo({
							url: params.url
						})
					}
				})
			},
			close() {
				this.show = false
			}
		}
	}
</script>

<style lang="scss">
	.Form {
		margin: 30rpx;
	}

	.u-page {
		padding: 0;
	}

	.u-cell-icon {
		width: 36rpx;
		height: 36rpx;
		margin-right: 8rpx;
	}

	.u-cell-group__title__text {
		font-weight: bold;
	}
</style>
