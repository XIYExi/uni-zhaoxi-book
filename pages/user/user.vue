<template>
	<view class="user_container">
		<view class="user_msg_wrapper"> 
			<view class="user_avatar_wrapper">
				<image src='https://s1.ax1x.com/2023/01/28/pSaVHgJ.png'/>
				<view class="user_avatar_name">{{user.nickname}}</view>
			</view>
			
			<view class="user_identity_wrapper">
				<view>
					<view class="user_identity_title">身份</view>
					<view class="user_identity_name">作者</view>
				</view>
				
			</view>
		</view>
		
		<view class="user_action_wrapper">
			<view class="user_action_item">
				<image src="../../static/购买历史.png" />
				<view class="user_action_text">购买记录</view>
			</view>
			<view class="user_action_item">
				<image src='../../static/收藏夹.png'/>
				<view class="user_action_text">收藏夹</view>
			</view>
			<view class="user_action_item">
				<image src="../../static/关于.png"/>
				<view class="user_action_text">关于我们</view>
			</view>
			<view class="user_action_item">
				<image src='../../static/设置.png'/>
				<view class="user_action_text">设置</view>
			</view>
		</view>
		
		
	</view>
	
	
</template>

<script>
	import './user.scss';
	export default{
		data(){
			return{
				user:{
					state: '作者',
					nickname: '笔名',
				}
			}
		},
		onLoad() {
		
		},
		methods: {
		
		}
	}
	
</script>

<style>
</style>