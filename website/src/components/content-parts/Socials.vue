<template>
	<el-row :gutter="12">
		<el-col v-for="link in links" :key="link.name" :xs="8" :sm="8" :md="6" :lg="4" :xl="3">
			<el-tooltip effect="dark" :content="`${link.social} account`" placement="bottom">
				<a :title="`my ${link.social} account link`" target="_blank" :href="link.href">
					<el-card shadow="hover">
						<div ref="cardBody" class="card-body">
							<img :alt="`my ${link.social} account`" :class="link.social" :src="getImageUri(link.src)">
							<label class="for-mobile">{{link.social}}</label>
						</div>
					</el-card>
				</a>
			</el-tooltip>
		</el-col>
	</el-row>
</template>
<script>
	export default {
		data() {
			return {
				links:[
					{
						name:'gmail',
						href:'mailto:anaselalamikh@gmail.com',
						src:'gmail.svg',
						social:'gmail'
					},
					{
						name:'linkedin',
						href:'https://www.linkedin.com/in/anaselalami/',
						src:'linkedin.svg',
						social:'linkedin'
					},
					{
						name:'github',
						href:'https://github.com/khofaai',
						src:'github.svg',
						social:'github'
					},
					{
						name:'npm',
						href:'https://npmjs.com/~khofaai',
						src:'npm.svg',
						social:'npm'
					},
					{
						name:'stackoverflow',
						href:'https://stackoverflow.com/users/5447416/el-alami-anas',
						src:'stackoverflow.svg',
						social:'stackoverflow'
					},
					{
						name:'packagist',
						href:'https://packagist.org/users/khofaai/',
						src:'packagist.png',
						social:'packagist'
					},
					{
						name:'twitter',
						href:'https://twitter.com/anaselalami_',
						src:'twitter.svg',
						social:'twitter'
					}
					
				],
			}
		},
		methods: {
			getImageUri(name) {
				return require('../../assets/socials/'+name);
			}
		}
	}
</script>