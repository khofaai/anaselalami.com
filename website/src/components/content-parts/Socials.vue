<template>
	<el-row  type="flex"  :gutter="12">
		<el-col v-for="link in links" :key="link.name">
			<el-tooltip 
				effect="dark" 
				placement="bottom"
				:content="$trans.get(`:attr account`,[link.social])" >
				<a :title="`my ${link.social} account link`" target="_blank" :href="link.href">
					<el-card shadow="hover">
						<div ref="cardBody" class="card-body">
							<img
								v-trans.alt="[ 'my :attr account', [link.social] ]"
								:class="link.social" 
								:src="getImageUri(link.src)">
							<label class="for-mobile">{{link.social}}</label>
						</div>
					</el-card>
				</a>
			</el-tooltip>
		</el-col>
	</el-row>
</template>
<script>
	import Socials from '@/api/socials';
	export default {
		data() {
			return {
				links:[],
			}
		},
		methods: {
			getImageUri(name) {
				return require('../../assets/socials/'+name);
			}
		},
		mounted() {
			this.links = Socials.links;
		}
	}
</script>