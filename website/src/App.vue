<template>
	<div id="app">
		<!-- <Menu/> -->
		<a 
			:href="driveResumeLink" 
			target="_blank" 
			title="my resume available only in french version, the english version will be available soon"
			class="get-resume">
			<div class="btnBody">
				<i class="el-icon-document"></i>
				<span>resume</span>
			</div>
		</a>
		<el-container>
			<el-main>
				<Content />
			</el-main>
		</el-container>
	</div>
</template>

<script>
import Menu from './components/partials/Menu.vue'
import Content from './components/Content.vue'

export default {
	name: 'app',
	data() {
		return {
			driveResumeLink: 'https://drive.google.com/file/d/1laPQoE0X7eOC3Ba1BaE6Na_akBZbpA8t/view',
			currentDate: new Date()
		};
	},
	components: {
		Menu,
		Content
	}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,800,800i,900,900i');
body {
	font-family: 'Nunito', 'Avenir',Helvetica, Arial, sans-serif;
	margin: 0;
	background: #efefef
}
.get-resume {
	position: fixed;
	right: 10px;
	top: 10px;
	width: 80px;
	height: 80px;
	border-radius: 50%;
	font-size: 50px;
	color: #fff;
	/* line-height: 500px; */
	text-align: center;
	background: #1ba39c;
}
.get-resume .btnBody {
	position: relative;
	height: 100%;
}
.get-resume .btnBody i{
	left: 26px;
	top: 13px;
	font-size: 32px;
} 
.get-resume .btnBody span {
	font-size: 18px;
	left: 12px;
	bottom: 13px;
}
.get-resume .btnBody i, .get-resume .btnBody span {
	display: block;
	position: absolute;
}
</style>
