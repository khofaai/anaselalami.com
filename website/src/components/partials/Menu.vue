<template>
	<el-menu class="el-menu-demo" mode="horizontal">
		<el-menu-item class="submenu" index="1">
			<div>
				<h1><strong>{{ title }}</strong></h1>
			</div>
		</el-menu-item>
		<el-submenu v-if="false" class="langMenu" index="2">
			<template slot="title">{{ currentLang }}</template>
			<el-menu-item v-for="(lang,index) in languages" :key="index" :index="`2-${index}`" @click="switchLangue(lang)">{{lang.name}}</el-menu-item>
		</el-submenu>
	</el-menu>
</template>
<script>
	export default {
		data() {
			return {
				title:'Anas El Alami',
				currentLang:'english',
				languagesNames:{
					en:'english',
					fr:'francais',
				},
				languages:[{code: 'en', name: 'english'}, {code: 'fr', name: 'Francais'}]
			}
		},
		methods: {
			switchLangue(lang) {
				if (this.currentLang !== lang.name) {
					this.currentLang = lang.name;
					this.$trans.setLang(lang.code);
					setTimeout(() => {
						window.location = window.location.href;
					}, 500);
				}
			},
			getAvailableLanguages() {
				let langs = this.$trans.getAvailableLanguages();
				langs.map( lang => this.languages.push({ code: lang, name: this.languagesNames[lang] }) );
			}
		},
		mounted() {
			this.getAvailableLanguages();
			this.currentLang = this.languagesNames[this.$trans.getCurrentLang()];
		}
	}
</script>
<style>
a {
	text-decoration: none
}
@media only screen and (max-width: 350px) {
.langMenu .el-submenu__title{padding-left:5px;padding-right:5px}
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
.langMenu {
	position: absolute;
	top: 0;
	right: 0;
	padding: 0;
}
.el-menu--horizontal > .el-menu-item.is-active, .el-menu--horizontal > .el-submenu.is-active .el-submenu__title {border-bottom: 2px solid transparent}

.el-menu-demo {
	box-shadow: 0px 0px 2px 0px #a3a3a3;
}
.el-menu--horizontal .el-menu .el-menu-item.is-active, .el-menu--horizontal .el-menu .el-submenu.is-active > .el-submenu__title {border-left: 3px solid #1ba39c;}
</style>
