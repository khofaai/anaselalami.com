<template>
	<div>
        <blockquote>
          "A young Web Developer Experienced with history of working in the information technology and services industry. Skilled in Laravel 5, SQL, Node.js, Javascript. since 2016"
        </blockquote>
        <h1>My Packages</h1>
		<el-row :gutter="12">
			<el-col v-for="pkg in packages" :xs="24" :sm="12" :md="6" :lg="6" :xl="4">
				<el-card shadow="hover">
					<div slot="header" class="clearfix">
						<span><a target="_blank" :href="pkg.github">{{ pkg.name }}</a></span>
						<div style="float:right;" class="clearfix">
							<img v-for="tag in pkg.tags" style="margin-left:2px" :src="tag">
						</div>
					</div>
					<div ref="cardBody" :style="{'height':getMaxHeight}" class="card-body">
						{{ pkg.description }}
					</div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				maxHeight:0,
				maxHeightStyle:'auto',
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
					}
				]
			}
		},
		methods:{
			matchCardBodyHeight(e) {
				this.$refs.cardBody.map((cardBody) => {
					let currHeight = cardBody.clientHeight ;
					if (this.maxHeight < currHeight) {
						this.maxHeight = currHeight;
						this.maxHeightStyle = currHeight+'px';
					}
				});
			}
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
<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-card {
  	margin-bottom: 5px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  blockquote {
    font-size: 1.2em;
    margin: auto;
    font-style: italic;
    color: #333 ;
    padding: 1.2em 30px 1.2em 75px;
    line-height: 1.6;
    background: #fff;
    margin-bottom: 20px;
    border:1px solid #ccc;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
</style>
