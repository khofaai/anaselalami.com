<template>
	<el-row :gutter="12" style="text-align: left">
		<el-collapse accordion v-model="openCollapseItem">
			<el-collapse-item v-for="(experience, index) in experiences" :key="index" :name="index+1" class="collapse-item">
				<template slot="title">
				  	<label class='post-entreprise' v-html="experience.title"></label>
				</template>
				<div class="post-container">
					<label v-html="experience.post.name"></label>
					<div v-for="desc in experience.post.description" class="post-description" v-html="desc"></div>
				</div>
			</el-collapse-item>
		</el-collapse>
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
<style type="text/css">
	.collapse-item .post-entreprise u,.collapse-item .post-entreprise span{
		font-weight: normal;
	}
	.collapse-item .post-entreprise {
		font-size: 1.5em;
		padding-left: 15px;
		font-weight: bold;
		border-bottom: 3px solid #efefef;
	}
	.collapse-item .post-container {
		padding: 15px;
		font-size: 1.2em;
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
		border-left: 3px solid #666;
		padding-left: 5px;
		display: block;
		margin-bottom: 5px;
	}
	.post-description {margin-top: 25px;}
</style>