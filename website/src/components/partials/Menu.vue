<template>
	<el-menu class="el-menu-demo" mode="horizontal">
		<el-menu-item class="submenu" index="1">
			<div>
				<h1><strong>Anas El Alami</strong></h1>
			</div>
		</el-menu-item>
	</el-menu>
</template>
<script>
	export default {}
</script>
<style>
a {
	text-decoration: none
}
@media only screen and (max-width: 710px) {
	.submenu {
		width: 100%
	}
	.submenu div{
		text-align: center;
	}
	.el-menu-item {
		padding: 0 1.5em;
	}
}
@media only screen and (max-width: 380px) {
	.el-menu-item {
		padding: 0 14px !important;
	}
}
@media only screen and (max-width: 415px) {
	.el-menu-item {
		padding: 0 17px;
	}
}
.el-menu--horizontal.el-menu {
	/*float: left;*/
	text-align: center;
}
.el-menu--horizontal > .el-menu-item {
	float: none
}
.submenu h1 {
	margin:0 15px;
	color:#111;
}
</style>
