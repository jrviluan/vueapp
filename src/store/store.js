import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		products: [
			{ name: 'Package 1', price: 20},
			{ name: 'Package 2', price: 40},
			{ name: 'Package 3', price: 50},
			{ name: 'Package 4', price: 80}
		]
	},
	getters:{
		saleProducts: state=>{
			var saleProducts = state.products.map (product => {
				return{
					name: '**' + product.name + '**',
					price: product.price/2
				}
			});
			return saleProducts;
		}
	},
	mutations:{
		reducePrice: (state, payload) =>{
			state.products.forEach( product=> {
		        product.price -= payload;
		    });
		}
	},
	actions: {
		reducePrice: (context, payload) => {
			setTimeout(function(){ 
				context.commit('reducePrice', payload)
			},200);
		}
	}
});