//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//引用Vuex
Vue.use(Vuex)

const actions = {
    //获取商品列表
	getData(context,value){
		uni.request({
			method: "GET",
			url: "http://120.48.173.118:5000/goods/gooditem",
			success(res) {
				context.commit('GetData',res.data.data)
			}
		})
	},
}

const mutations = {
    //将商品数据加入到state
	GetData(context,value){
		context.goodData = value
	}	
}

//初始化数据
const state = {
   num:0,
   goodData:[]
}

//创建并暴露store
export default new Vuex.Store({
	actions,
	mutations,
	state,
})