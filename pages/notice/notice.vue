<template>
	<view class="notice_container">

		<view class="notice_title_wrapper">
			<text>公告</text>
		</view>

		<view class="notice_list_wrapper">
			<view
			 v-for="(item, i) in notices"
			 class="notice_list_item"
			 :key="item.id"
			>
				<view v-if="item.cover.length > 0"
					class='notice_item_showCover'
				>
					<view class="notice_item_coverWrapper">
						<image :src="item.cover" />
					</view>

					<view class="notice_item_msgWrapper">
						<view class="notice_item_title">{{item.title}}</view>
						<view class="notice_item_desc">{{item.desc}}</view>
            <view class="notice_item_time">{{item.time}}</view>
					</view>

				</view>
				<view v-else class="notice_item_showText">
					<view class="notice_item_msgWrapper">
            <view class="notice_item_title">{{item.title}}</view>
            <view class="notice_item_desc">{{item.desc}}</view>
            <view class="notice_item_time">{{item.time}}</view>
					</view>
				</view>

			</view>

		</view>

	</view>

</template>

<script>
	import './notice.scss';
	export default{
		data(){
			return{
				notices: [
					{
						id: 'notice 01',
						title: 'notice 01',
						time: '2023-01-29',
						desc: '这是关于notice 01的描述，描述一旦超过两行将会显示为省略号',
						cover: 'https://s1.ax1x.com/2023/01/28/pSUxBkR.jpg'
					},
          {
            id: 'notice 02',
            title: 'notice 02',
            time: '2023-01-29',
            desc: '这是关于notice 02的描述，描述一旦超过两行就会显示为省略号',
            cover: ''
          },
          {
            id: 'notice 03',
            title: 'notice 03',
            time: '2023-01-29',
            desc: '这是关于notice 03的描述，描述一旦超过两行将会显示为省略号',
            cover: 'https://s1.ax1x.com/2023/01/28/pSUxBkR.jpg'
          },
          {
            id: 'notice 04',
            title: 'notice 04',
            time: '2023-01-29',
            desc: '这是关于notice 04的描述，描述一旦超过两行就会显示为省略号',
            cover: ''
          },
          {
            id: 'notice 05',
            title: 'notice 05',
            time: '2023-01-29',
            desc: '这是关于notice 05的描述，描述一旦超过两行将会显示为省略号',
            cover: 'https://s1.ax1x.com/2023/01/28/pSUxBkR.jpg'
          },
          {
            id: 'notice 06',
            title: 'notice 06',
            time: '2023-01-29',
            desc: '这是关于notice 06的描述，描述一旦超过两行就会显示为省略号',
            cover: ''
          },

				]
			}
		},
		onLaunch(){

		},
		methods: {

		}
	}

</script>

<style>
</style>
