<template>
	<el-row :gutter="12" style="text-align: left">
		<el-tabs class="career-tab" value="1" tab-position="left" style="height: 200px;">
			<el-tab-pane class="career-tab-cotainer" v-for="(experience, index) in experiences" :key="index" :name="`${index+1}`" :label="experience.title">
				<div class="post-container">
					<label v-html="experience.post.name"></label>
					<div v-for="(desc, index) in experience.post.description" :key="index" class="post-description" v-html="desc"></div>
				</div>
			</el-tab-pane>
		</el-tabs>
	</el-row>
</template>
<script>
	import Career from '@/api/career';
	export default {
		data() {
			return {
				openCollapseItem : '1',
				experiences: []
			}
		},
		mounted() {
			this.experiences = Career.experiences;
		}
	}
</script>
<style type="sass">
	.career-tab.el-tabs {
		background-color: #fff;
	}
	.el-tabs__item {
		font-weight: 600;
	}
	.el-tabs--left .el-tabs__item.is-left {
		text-align: left;
		font-size: 16px;
		border-bottom: 1px solid #eee;
	}
	.el-tabs__item.is-active, .el-tabs__item:hover {
		color: #1BA39C;
	}
	.timeline span {color:#303133;}
	.timeline {color:#a7bab1;}
	.timeline, .post-entreprise span{
		font-size: .8em;
	}
	.post-container label span{font-size: .8em}
	.post-container label{
		font-weight: bold;
		font-size: 1.3em;
		color:#666;
		display: block;
		margin-bottom: 5px;
	}
	.career-tab-cotainer {
		padding: 10px 30px;
		margin-top: 10px;
	}
	.el-tabs__active-bar {
		background-color: #1BA39C
	}
	.post-description {margin-top: 25px;}
</style>