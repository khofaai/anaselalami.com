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
					<div style="float:right;" class="clearfix">
						<img 
							v-for="(tag, index) in pkg.tags" 
							style="margin-left:2px" 
							:key="index" 
							:alt="`tags of ${pkg.name}`" 
							:src="tag" 
						/>
					</div>
				</div>
				<div ref="cardBody" :style="{'height': getMaxHeight}" class="card-body">
					{{ pkg.description }}
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