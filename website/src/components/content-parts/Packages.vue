<template>
	<el-row :gutter="12">
		<el-col v-for="pkg in packages" :key="pkg.name" :xs="24" :sm="12" :md="8" :lg="8" :xl="6">
			<el-card shadow="hover">
				<div slot="header" class="clearfix">
					<span>
						<a 
							class="card-link" 
							target="_blank" 
							:title="`my ${pkg.name} link`" 
							:href="pkg.github">
								{{ pkg.name }}
						</a>
					</span>
					<div style="float:right">
						<span class="tech-tag" v-for="(tech, index) in pkg.technologies" :key="index" :title="tech.name" :style="{ color: '#333', borderColor: tech.bgcolor}">
							{{tech.tag}}
						</span>
					</div>
				</div>
				<div ref="cardBody" :style="{'height': getMaxHeight}" class="card-body">
					{{ pkg.description }}
				</div>
				<div class="card-footer">
					<div v-if=" pkg.tags.length === 0">
						no data !
					</div>
					<img 
						v-for="(tag, index) in pkg.tags" 
						style="margin-left:2px" 
						:key="index" 
						:alt="`tags of ${pkg.name}`" 
						:src="tag" 
					/>
				</div>
			</el-card>
		</el-col>
	</el-row>
</template>
<script>
	import Packages from '@/api/packages';
	export default {
		data() {
			return {
				maxHeight: 0,
				maxHeightStyle: 'auto',
				packages: [],
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
		computed: {
			getMaxHeight() {
				return this.maxHeightStyle
			}
		},
		mounted() {
			this.packages = Packages.packages;
			setTimeout(() => this.matchCardBodyHeight() , 0);
		},
	}
</script>
<style>
	.tech-tag {
		padding: 3px 5px;
		margin-left: 2px;
		border-radius: 2px;
		font-weight: 600;
		background-color: #efefef;
		border: 1px solid #333;
	}
	.card-footer {
		border-top: 1px solid #ddd;margin-top:10px;padding: 10px 5px 0px 5px
	}
</style>
