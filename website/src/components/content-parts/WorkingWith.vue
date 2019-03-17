<template>
	<el-row :gutter="12" style="text-align: center">
		<el-button v-for="(tech, index) in technologies" :key="index" class="tech-tags">{{ tech }}</el-button>
	</el-row>
</template>
<script>
	export default {
		data() {
			return {
				technologies: ['vuejs','reactjs','angular','socket.io','rxjs','expressjs','nodejs','laravel','symfony','jquery','html','css','scss','vuepress','opencart','meteorjs','sql','nosql','lodash',
				],
			}
		}
	}
</script>