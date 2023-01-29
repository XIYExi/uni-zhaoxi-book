<template>
	<view class="notice_detail_container">
		<rich-text :nodes="content"></rich-text>
	</view>

</template>

<script>
	import './noticeDetail.scss';
  import {contentTest} from './noticeDetailTest';
	export default{
		data(){
			return{
				content: contentTest,
			}
		},
		onLoad:function(options){
			console.log(options.id)
			//TODO 根据id去后端取值
		},
		methods:{

		}
	}
</script>

<style>
</style>
