<template>
	<div>
		<form id="search">
			<input type="text" class="form-control" placeholder="search..." name="query" v-model="searchQuery" aria-describedby="basic-addonl">
		</form>
		<div v-if="brands">
		<demo-grid
			:data="brands"
			:columns="brandsColumns"
			:filter-key="searchQuery">
			</demo-grid>			
		</div>
		<div v-else>
			loading...
		</div>
	</div>
</template>
<style>
	
</style>
<script>
	import DemoGrid from './../Filtering/Filter.vue';
	export default{
		components:{
			DemoGrid
		},
		data(){
			return{
				searchQuery:'',
				brandsColumns: ['name',],
				brands: []
			}
		},
		created(){
			this.fetchbrands();
		},
		methods:{
			fetchbrands(){
				axios.get('api/manufactures').then(response=> this.brands = response.data.manufactures)
			}
		}
	}
</script>