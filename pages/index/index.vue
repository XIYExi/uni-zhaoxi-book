<template>
	<view class='index_container'>
		<view class='index_search_wrapper'>
			<view class='index_input_wrapper'>
				<i></i>
				<input class='index_input' placeholder="..."/>
			</view>
			<view class='index_avatar_wrapper'>
				<image src='../../static/logo.png'/>
			</view>
		</view>
		
		<view class='index_swipper_wrapper'>
			<swiper circular="true" interval="1000" duration="1000" class="swiper">
				<swiper-item>
					<image mode="widthFix" src="https://static-1258386385.cos.ap-beijing.myqcloud.com/img/banner/swiper-1.jpg"></image>
				</swiper-item>
				<swiper-item>
					<image mode="widthFix" src="https://static-1258386385.cos.ap-beijing.myqcloud.com/img/banner/swiper-2.jpg"></image>
				</swiper-item>
				<swiper-item>
					<image mode="widthFix" src="https://static-1258386385.cos.ap-beijing.myqcloud.com/img/banner/swiper-3.jpg"></image>
				</swiper-item>
				<swiper-item>
					<image mode="widthFix" src="https://static-1258386385.cos.ap-beijing.myqcloud.com/img/banner/swiper-4.jpg"></image>
				</swiper-item>
				<swiper-item>
					<image mode="widthFix" src="https://static-1258386385.cos.ap-beijing.myqcloud.com/img/banner/swiper-5.jpg"></image>
				</swiper-item>
			</swiper>
		</view>
		
		<view class='index_notice_wrapper'>
			<view class="index_notice_bar" @click='handleJumpToNotice()'>
				<text class='index_notice_bar_title'>公告</text>
				<i class='index_notice_bar_icon'> > </i>
			</view>
			
			<view class="index_notice_preview">
				<view v-for="(item, i) in notice" 
				class='index_notice_preview_item' 
				:key="i"
				:id='item.id'
				@click='e=>handleJumpToNoticeDetail(e)'
				>
					{{item.title}}
				</view>
			</view>
			
		</view>
	
		<view class='index_new_wrapper'>
			<view class='index_new_bar' @click="handleJumpToBook()">
				<text class='index_new_bar_title'>最新出版</text>
				<i class='index_new_bar_icon'> > </i>
			</view>
			
			<view class='index_new_preview'>
				<view 
				v-for="(item, i) in newBook"
				class='index_new_preview_item'
				:key="item.id"
				>
					<view>
						<image class='index_new_item_cover' 
						:src='item.cover'/>
					</view>
					
					<view class='index_new_msg_wrapper'>
						<view class="new_msg_title">{{item.title}}</view>
						<view class='new_msg_at_wrapper'>
							<view class='new_msg_author'>{{item.author}}</view> 
							<view class='new_msg_time'>{{item.time}}</view>
						</view>
						<view class='new_msg_desc'>{{item.desc}}</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class='index_shop_wrapper'>
			<view class="index_shop_bar">
				<text class='index_shop_bar_title'>朝夕书店</text>
				<i class='index_shop_bar_icon'> > </i>
			</view>
			
			<view class='index_shop'>
				<view v-for="(item, i) in shopList" 
				class='index_shop_preview_item'>
					<view>
						<image :src='item.cover' />
					</view>
					
					<view class='shop_msg_wrapper'>
						<view class='shop_msg_title'>{{item.title}}</view>
						<view class='shop_msg_price'>{{item.price}}</view>
					</view>
					
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import './index.scss'
	export default {
		data() {
			return {
				title: 'Hello',
				notice: [
					{
						id: 'notice1',
						title: '公告测试 01'
					},
					{
						id: 'notice2',
						title: '公告测试 02'
					},
					{
						id: 'notice3',
						title: '公告测试 03'
					}
				],
				newBook: [
					{
						id: 'new1',
						title: '新书 01',
						author: '作者 01',
						time: '2023-01-28',
						desc: '01出版社出版11111111111111111111111111111111111111111111',
						cover: 'https://s1.ax1x.com/2023/01/28/pSUxBkR.jpg'
					},
					{
						id: 'new2',
						title: '新书 02',
						author: '作者 02',
						time: '2023-01-28',
						desc: '02出版社出版',
						cover: 'https://s1.ax1x.com/2023/01/28/pSUxBkR.jpg'
					},
					{
						id: 'new3',
						title: '新书 03',
						author: '作者 03',
						time: '2023-01-28',
						desc: '03出版社出版',
						cover: 'https://s1.ax1x.com/2023/01/28/pSUxBkR.jpg'
					},
					{
						id: 'new4',
						title: '新书 04',
						author: '作者 04',
						time: '2023-01-28',
						desc: '04出版社出版',
						cover: 'https://s1.ax1x.com/2023/01/28/pSUxBkR.jpg'
					},
					{
						id: 'new5',
						title: '新书 05',
						author: '作者 05',
						time: '2023-01-28',
						desc: '05出版社出版',
						cover: 'https://s1.ax1x.com/2023/01/28/pSUxBkR.jpg'
					}
				],
				shopList: [
					{
						id: 'shop01',
						title: 'shop 01',
						price: '29.9',
						cover: 'https://s1.ax1x.com/2023/01/28/pSa9MvV.jpg',
						link: 'xxx'
					},
					{
						id: 'shop02',
						title: 'shop 02',
						price: '29.9',
						cover: 'https://s1.ax1x.com/2023/01/28/pSa9MvV.jpg',
						link: 'xxx'
					},
					{
						id: 'shop03',
						title: 'shop 03',
						price: '29.9',
						cover: 'https://s1.ax1x.com/2023/01/28/pSa9MvV.jpg',
						link: 'xxx'
					}
				]
				
			}
		},
		onLoad() {

		},
		methods: {
			handleJumpToNotice(){
				uni.navigateTo({
					url:'../../pages/notice/notice'
				})
			},
			handleJumpToNoticeDetail(e){
				//console.log(e)
				uni.navigateTo({
					url:`../noticeDetail/noticeDetail?id=${e.currentTarget.id}`
				})
			},
			handleJumpToBook(){
				uni.navigateTo({
					url: '../book/book'
				})
			}
		}
	}
</script>

<style lang="scss">
	
	.new_msg_title{
		height: 40rpx;
		font-family: 'Abel';
		font-style: normal;
		font-weight: 400;
		font-size: 32rpx;
		line-height: 40rpx;
		color: #333333;
	}
	
	.new_msg_at_wrapper{
		position: relative;	
		display: flex;
		.new_msg_time{
			margin-left: 35%;
		}
		
		.new_msg_author, 
		.new_msg_time{
			width: 50%;
			font-family: 'Abel';
			font-style: normal;
			font-weight: 400;
			font-size: 26rpx;
			line-height: 32rpx;
			/* or 123% */
			text-align: justify;	
			color: #666666;
		}
	}
	
	.new_msg_desc{
		font-family: 'Abel';
		font-style: normal;
		font-weight: 400;
		font-size: 26rpx;
		line-height: 32rpx;
		text-align: justify;
		color: #666666;
		word-wrap: break-word;
		word-break: break-all;
	}
	
	.swiper {
		height: 350rpx;
		image {
			width: 100%;
		}
	}
	
</style>
