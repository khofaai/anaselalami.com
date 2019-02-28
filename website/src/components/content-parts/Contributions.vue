<template>
	<el-row :gutter="12">
		<el-col v-for="pkg in contributionPackages" :key="pkg.name" :xs="24" :sm="12" :md="8" :lg="8" :xl="6">
			<el-card shadow="hover">
				<div slot="header" class="clearfix">
					<span><a :title="`my ${pkg.name} link`" target="_blank" class="card-link" :href="pkg.github">{{ pkg.name }}</a></span>
					<div style="float:right;" class="clearfix">
						<img v-for="tag in pkg.tags" :key="tag" style="margin-left:2px" :alt="`tags of ${pkg.name}`" :src="tag">
					</div>
				</div>
				<div ref="cardBody" :style="{'height':getMaxHeight}" class="card-body">
					{{ pkg.description }}
				</div>
			</el-card>
		</el-col>
	</el-row>
</template>
<script>
	export default {
		data() {
			return {
				maxHeight: 0,
				maxHeightStyle: 'auto',
				contributionPackages: [
					{
						name:'nova-resource-maker',
						github:'https://github.com/akiyamaSM/nova-resource-maker',
						description:'A Nova tool that will help you to generate fields array for the resource.',
						tags:[
							'https://poser.pugx.org/inani/nova-resource-maker/downloads',
							'https://poser.pugx.org/inani/nova-resource-maker/v/stable'
						]
					},
					{
						name:'vue-social-sharing',
						github:'https://github.com/nicolasbeauvais/vue-social-sharing',
						description:'A Vue.js component for sharing links to social networks',
						tags:[
							'https://img.shields.io/npm/dt/vue-social-sharing.svg'
						]
					}
				]
			}
		},
		methods: {
			matchCardBodyHeight() {
				this.$refs.cardBody.map((cardBody) => {
					let currHeight = cardBody.clientHeight ;
					if (this.maxHeight < currHeight) {
						this.maxHeight = currHeight;
						this.maxHeightStyle = (currHeight)+'px';
					}
				});
			},
		},
		mounted() {
			this.matchCardBodyHeight();
		},
		computed:{
			getMaxHeight() {
				return this.maxHeightStyle
			}
		}
	}
</script>