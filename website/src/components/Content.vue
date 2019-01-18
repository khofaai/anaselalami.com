<template>
	<div class="content">
		<el-row justify="center">
			<el-col :xs="{offset:6}" :sm="8" :md="8" :lg="4" :xl="4">
				<img src="https://s.gravatar.com/avatar/49d48379d4ec4f320bcaf8451eb36d9c?s=180" class="avatar">
			</el-col>
			<el-col :xs="24" :sm="16" :md="16" :lg="20" :xl="20">
		        <blockquote>
		        	<h1>Anas El Alami</h1>
		          	"A young Web Developer Experienced with history of working in the information technology and services industry. Skilled in Php, Node.js, Javascript. since 2016"
		        </blockquote>
			</el-col>
      	</el-row>
        <h1>My Packages</h1>
		<el-row :gutter="12">
			<el-col v-for="pkg in packages" :xs="24" :sm="12" :md="8" :lg="8" :xl="6">
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
        <h1>My Contributions</h1>
		<el-row :gutter="12">
			<el-col v-for="pkg in contributionPackages" :xs="24" :sm="12" :md="8" :lg="8" :xl="6">
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
				],
				contributionPackages:[
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
						name:'yumi-console',
						github:'https://github.com/khofaai/yumi',
						description:'This package used for chibi framework',
						tags:[]
					},
					{
						name:'chibi',
						github:'https://github.com/akiyamaSM/chibi',
						description:'Chibi is a mini PHP framework to work on small projects, containing the following elements.',
						tags:[]
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
	@media only screen and (max-width: 760px) {
		.content .avatar {
			margin-left: 0px !important;
		}
	}
	.content .avatar {
		margin-left: 8%;
	}
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
	    padding: 1.2em 30px 3em 75px;
	    line-height: 1.6;
	    background: #fff;
	    margin-bottom: 20px;
	    border:1px solid #ccc;
	    font-weight: bold
  	}
  	.clearfix:before,
  	.clearfix:after {
	    display: table;
	    content: "";
  	}
  	.clearfix:after {
    	clear: both
  	}
  	.avatar {
		/*margin-top: -10px;*/
		border-radius: 50%
	}
</style>
