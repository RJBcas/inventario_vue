<template>
	<div class="container">
		<div class="row">
			<div class="col-md-8 col-md-offset-2">
				<div class="form-group">
					<input type="text" class="form-control" placeholder="search..." name="query" v-model="searchQuery" aria-describedby="basic-addonl"> 
				</div>
			</div>
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
				brandsColumns: ['serial','quantity','category', 'description','location','manufacture', 'model'],
				brands: []
			}
		},
		created(){
			this.fetchbrands();
		},
		methods:{
			fetchbrands(){
				axios.get('api/products').then(response=> this.brands = _.map(response.data.products, function(num){
					var pick = _.pick(num,'quantity','serial','manufacture.name','description.name','location.name','category.name','brand.name','status');
					var objectProduct = {quantity:pick.quantity, serial:pick.serial, manufacture:pick.manufacture.name, description:pick.description.name, location:pick.location.name, category:pick.category.name, model:pick.brand.name, status:pick.status};
					return objectProduct
				}))
			}
		}
	}
</script>