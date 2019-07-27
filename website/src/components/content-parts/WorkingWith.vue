<template>
	<el-row :gutter="12" style="text-align: center">
		<el-button v-for="(tech, index) in technologies" :key="index" class="tech-tags">{{ tech }}</el-button>
	</el-row>
</template>
<script>
	export default {
		data() {
			return {
				technologies: ['vuejs','reactjs','angular','expressjs','nodejs','socket.io','jquery','rxjs','laravel','symfony','html','css','scss','vuepress','meteorjs','sql','nosql','lodash','nginx','linux OS', 'jenkins', 'docker', 'scrum', 'kanban'
				],
			}
		}
	}
</script>