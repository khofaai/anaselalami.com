<template>
	<div class="content">
		<Bio />
		<h2 class="title">Socials/Links</h2>
		<Socials />
		<h2 class="title">Career :</h2>
		<Career />
		<h2 class="title">Working With :</h2>
		<WorkingWith />
		<h2 class="title">Packages</h2>
		<Packages />
		<h2 class="title">Top Contributions</h2>
		<Contributions />
	</div>
</template>
<script>

	import Bio from './content-parts/Bio';
	import Socials from './content-parts/Socials';
	import Career from './content-parts/Career';
	import WorkingWith from './content-parts/WorkingWith';
	import Packages from './content-parts/Packages';
	import Contributions from './content-parts/Contributions';

	export default {
		components:{
			Bio,
			Socials,
			Career,
			WorkingWith,
			Packages,
			Contributions,
		}
	}
</script>
<style>
	.content {
		padding: 0 120px;
	}
	@media only screen and (max-width: 760px) {
		.content {
			padding: 0 5px;
		}
		.content .avatar {
			margin-left: 0px !important;
		}
		.content .header {
			text-align: center;
		}
		label.for-mobile {
			display: block !important;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}
	label.for-mobile {
		display: none;
	}
	.title {
		border-top: 1px solid #c4c1c1;
		padding-top: 15px;
	}
	.card-link {
		font-weight: bold;
		color:#222;
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
		position: relative;
		font-size: 1.2em;
		margin: auto;
		font-style: italic;
		color: #333 ;
		padding: 3em 30px 3em 30px;
		line-height: 1.6;
		background: #fff;
		margin-bottom: 20px;
		border:1px solid #ccc;
		font-weight: bold;
		text-align: center;
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
	.card-body {
		text-align: center;
	}
	.card-body img {
		height: 50px
	}

	.gmail {
		/*fill:#D14836;*/
		filter: invert(34%) sepia(27%) saturate(2508%) hue-rotate(331deg) brightness(103%) contrast(94%);
	}
	.npm {
		/*fill:#CB3837;*/
		filter: invert(35%) sepia(36%) saturate(1883%) hue-rotate(325deg) brightness(91%) contrast(99%);
	}
	.stackoverflow {
		/*fill:#FE7A16;*/
		filter: invert(54%) sepia(57%) saturate(1751%) hue-rotate(346deg) brightness(98%) contrast(107%);
	}
	.twitter {
		/*fill:#1DA1F2;*/
		filter: invert(52%) sepia(86%) saturate(2467%) hue-rotate(176deg) brightness(99%) contrast(92%);
	}
	.linkedin {
		/*fill:#0077B5;*/
		filter: invert(27%) sepia(92%) saturate(1456%) hue-rotate(177deg) brightness(98%) contrast(102%);
	}
	.tech-tags {
		margin:0 5px 5px 0 !important;
	}
</style>
