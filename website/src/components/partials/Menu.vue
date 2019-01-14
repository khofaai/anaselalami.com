<template>
	<el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
		<el-menu-item class="submenu" index="1">
			<span><strong>Anas El Alami</strong></span>
			<img :src="'https://s.gravatar.com/avatar/49d48379d4ec4f320bcaf8451eb36d9c?s='+45" class="avatar">
		</el-menu-item>
		<el-menu-item class="social-item" index="2">
			<a  target="_blank" href="mailto:anaselalamikh@gmail.com">
				<img class="social-icon gmail" src="../../assets/socials/gmail.svg">
			</a>
		</el-menu-item>
		<el-menu-item class="social-item" index="3">
			<a target="_blank" href="https://github.com/khofaai">
				<img class="social-icon github" src="../../assets/socials/github.svg">
			</a>
		</el-menu-item>
		<el-menu-item class="social-item" index="4">
			<a target="_blank" href="https://npmjs.com/~khofaai">
				<img class="social-icon npm" src="../../assets/socials/npm.svg">
			</a>
		</el-menu-item>
		<el-menu-item class="social-item" index="5">
			<a target="_blank" href="https://stackoverflow.com/users/5447416/el-alami-anas">
				<img class="social-icon stackoverflow" src="../../assets/socials/stackoverflow.svg">
			</a>
		</el-menu-item>
		<el-menu-item class="social-item" index="6">
			<a target="_blank" href="https://twitter.com/anaselalami_">
				<img class="social-icon twitter" src="../../assets/socials/twitter.svg">
			</a>
		</el-menu-item>
		<el-menu-item class="social-item" index="7">
			<a target="_blank" href="https://www.linkedin.com/in/anaselalami/">
				<img class="social-icon linkedin" src="../../assets/socials/linkedin.svg">
			</a>
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
.el-menu--horizontal.el-menu .el-menu-item.submenu {
	float: right;
}
.submenu span {
	margin:0 15px;
}
.submenu .avatar {
	/*margin-top: -10px;*/
	border-radius: 50%
}
.social-icon {
	height: 25px;
}
.social-icon.gmail {
	/*fill:#D14836;*/
	filter: invert(34%) sepia(27%) saturate(2508%) hue-rotate(331deg) brightness(103%) contrast(94%);
}
.social-icon.github {
	/*fill:#070707;*/
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
