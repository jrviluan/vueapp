import Login from '@/components/login'
import User from '@/components/userComponent/addUser'
import Product from '@/components/product'


export default [
	{ path: '/', name: 'login', component: Login },
	{ path: '/user', name: 'user',component: User },
	{ path: '/product', name: 'product',component: Product },
]