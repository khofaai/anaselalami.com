<template>
	<el-row justify="center">
		<el-col class="header" :xs="24" :sm="8" :md="8" :lg="4" :xl="4">
			<img alt="anas el alami picture" src="https://s.gravatar.com/avatar/49d48379d4ec4f320bcaf8451eb36d9c?s=160" class="avatar">
		</el-col>
		<el-col :xs="24" :sm="16" :md="16" :lg="20" :xl="20">
			<blockquote v-trans.bio></blockquote>
		</el-col>
	</el-row>
</template>