<template>
	<view class="book_container">
		<view class="book_title_wrapper">
			<text>最新出版</text>
		</view>
		
		<view class="book_list_wrapper">
			
			<view 
				v-for="(item, i) in bookList"
				:key='item.id'
				:id='item.id'
				class="book_list_item"
			>
				
				<view class="book_list_cover_wrapper">
					<image :src='item.cover' />
				</view>
				
				<view class="book_list_detail_wrapper">
					<view class="book_list_block">
						
					</view>
					<view class="book_list_detail">
						<view class="book_list_title">{{item.title}}</view>
						<view class="book_list_other">{{item.author}}</view>
						<view class="book_list_other">{{item.type}}</view>
						<view class="book_list_other">{{item.publisher}}</view>
						<view class="book_list_other">{{item.time}}</view>
					</view>
				</view>
				
				
			</view>
			
		</view>
		
		
	</view>
	
	
</template>

<script>
	import './book.scss';
	export default{
		data(){
			return{
				bookList:[
					{
						id: 'book 01',
						title: 'book 01',
						author: 'author 01',
						cover: 'https://s1.ax1x.com/2023/01/28/pSUxBkR.jpg',
						publisher: 'publisher 01',
						type: '诗歌',
						time: '2023-01-29'
					},
					{
						id: 'book 02',
						title: 'book 02',
						author: 'author 02',
						cover: 'https://s1.ax1x.com/2023/01/28/pSUxBkR.jpg',
						publisher: 'publisher 02',
						type: '散文',
						time: '2023-01-29'
					},
					{
						id: 'book 03',
						title: 'book 03',
						author: 'author 03',
						cover: 'https://s1.ax1x.com/2023/01/28/pSUxBkR.jpg',
						publisher: 'publisher 03',
						type: '小说',
						time: '2023-01-29'
					},
					{
						id: 'book 04',
						title: 'book 04',
						author: 'author 04',
						cover: 'https://s1.ax1x.com/2023/01/28/pSUxBkR.jpg',
						publisher: 'publisher 04',
						type: '期刊',
						time: '2023-01-29'
					}
				]
			}
		},
		onLoad(options){
			
		},
		methods:{
			
		}
	}
</script>

<style>
</style>