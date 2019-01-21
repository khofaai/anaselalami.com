<template>
	<el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
		<el-menu-item class="submenu" index="1">
			<div>
				<h1><strong>Anas El Alami</strong></h1>
			</div>
		</el-menu-item>
		
	</el-menu>
</template>
<script>
	export default {
		data() {
			return {
				activeIndex: '1'
			};
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
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
.social-icon {
	height: 25px;
}
.social-icon.gmail {
	/*fill:#D14836;*/
	filter: invert(34%) sepia(27%) saturate(2508%) hue-rotate(331deg) brightness(103%) contrast(94%);
}
.social-icon.npm {
	/*fill:#CB3837;*/
	filter: invert(35%) sepia(36%) saturate(1883%) hue-rotate(325deg) brightness(91%) contrast(99%);
}
.social-icon.stackoverflow {
	/*fill:#FE7A16;*/
	filter: invert(54%) sepia(57%) saturate(1751%) hue-rotate(346deg) brightness(98%) contrast(107%);
}
.social-icon.twitter {
	/*fill:#1DA1F2;*/
	filter: invert(52%) sepia(86%) saturate(2467%) hue-rotate(176deg) brightness(99%) contrast(92%);
}
.social-icon.linkedin {
	/*fill:#0077B5;*/
	filter: invert(27%) sepia(92%) saturate(1456%) hue-rotate(177deg) brightness(98%) contrast(102%);
}
.el-menu--horizontal > .el-menu-item.is-active {
	border-bottom: 2px solid transparent
}
.social-item a {
	display: block;
}
</style>
