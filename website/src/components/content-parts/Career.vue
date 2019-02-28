<template>
	<el-row :gutter="12" style="text-align: left">
		<el-collapse accordion v-model="openCollapseItem">
			<el-collapse-item name="1" class="collapse-item">
				<template slot="title">
				  <label class='post-entreprise'>
				  		Lead Tech Js - <u class="timeline">Current</u>
					</label>
				</template>
				<div class="post-container">
					<label>
						Innoveos - <u class="timeline">Started from : 03/2019 </u>
					</label>
					<div class="post-description">
						As a `<strong>Lead Tech Javascript</strong>`, i have a lot of missions beside Developing, set Developpements Process, also guide our Interns and helps with Technical needs, using <strong>Vuejs</strong>, <strong>ReactJs</strong> <b>(most times)</b>, <strong>Angular 5+</strong>, for server side <strong>ExpressJs</strong> <b>(mode times)</b>, <strong>Nodejs</strong> ...
					</div>
				</div>
			</el-collapse-item>
			<el-collapse-item name="2" class="collapse-item">
				<template slot="title">
				  <label class='post-entreprise'>
				  		FullStack Developer
					</label>
				</template>
				<div class="post-container">
					<label>
						Pyxicom - 
						<u class="timeline">05/2017 </u> <span>To</span>  <u class="timeline">02/2019</u>
					</label>
					<div class="post-description">
						As a `<strong>Full Stack Developer</strong>` and `<strong>Javascript Lead</strong>` i've been assigned to an intern team for `Renault maroc`, we did multiple applications using <strong>Angular7</strong> also <strong>Vuejs 2</strong> and <strong>Laravel 5</strong> for APIs,
					</div>
					<div class="post-description">
						As First Project i was assigned to a E-commerce CMS website, an old project where i was the technical expert, for 1year duration i've made a lot of modules and optimizing a lot of basic feature like `<b>importing prices</b>` who did take <b>1hours and 30 minutes</b> AVG for each country and then i've reduce it to <b>7 minutes</b> for each.
					</div>
					</div>
				</div>
			</el-collapse-item>
			<el-collapse-item name="3" class="collapse-item">
				<template slot="title">
				  <label class='post-entreprise'>
				  		BackEnd Developer PHP
					</label>
				</template>
				<div class="post-container">
					<label>
						Highness - 
						<u class="timeline">03/2016 </u> <span>To</span> <u class="timeline"> 08/2017</u>
					</label>
					<div class="post-description">
						As An Intern, i've been assign to `<strong>Back-end Developer Php</strong>` as a position, using both <strong>Laravel 5</strong> and <strong>jQuery</strong> as a start, after that i moved to <strong>Vuejs</strong> in place of <strong>jQuery</strong> for intern project,
					</div>
					<div class="post-description">
						I was the only javascript developer in our team so i've been coordinating between our front-end designer and converting html templates to <strong>Vuejs</strong> components, also communicating with our Expert Laravel Tech lead and another Expert Laravel developer for API calls, and also developing <strong>Laravel packages</strong> when needed
					</div>
				</div>
				</div>
			</el-collapse-item>
		</el-collapse>
	</el-row>
</template>
<script>
	export default {
		data() {
			return {
				openCollapseItem : '1'
			}
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