<template>
	<el-row :gutter="12">
		<el-col v-for="pkg in packages" :key="pkg.name" :xs="24" :sm="12" :md="8" :lg="8" :xl="6">
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
				packages:[
					{
						name:'laraset',
						github:'https://github.com/khofaai/laraset',
						description:'Laraset is a logical modular management using laravel Artisan CLI',
						tags:[
							'https://img.shields.io/github/release/khofaai/laraset.svg',
							'https://poser.pugx.org/khofaai/laraset/downloads'
						]
					},
					{
						name:'kh-popover',
						github:'https://www.npmjs.com/package/kh-popover',
						description:'Popover/Tooltip build for vuejs framework.',
						tags:[
							'https://img.shields.io/npm/v/kh-popover.svg',
							'https://img.shields.io/npm/dt/kh-popover.svg'
						]
					},
					{
						name:'vue-fullmodal',
						github:'https://www.npmjs.com/package/vue-fullmodal',
						description:'fullmodal for vuejs, this package still in earlier stage',
						tags:[
							'https://img.shields.io/npm/v/vue-fullmodal.svg',
							'https://img.shields.io/npm/dt/vue-fullmodal.svg'
						]
					},
					{
						name:'vue-dropify',
						github:'https://www.npmjs.com/package/vue-dropify',
						description:'Dropify build for vuejs framework',
						tags:[
							'https://img.shields.io/npm/v/vue-dropify.svg',
							'https://img.shields.io/npm/dt/vue-dropify.svg'
						]
					},
					{
						name:'vue-translater',
						github:'https://www.npmjs.com/package/vue-translater',
						description:'vuejs package helps you intergate translation with vuejs apps',
						tags:[
							'https://img.shields.io/npm/v/vue-translater.svg',
							'https://img.shields.io/npm/dt/vue-translater.svg'
						]
					}
				],
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