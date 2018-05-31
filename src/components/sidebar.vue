<template>
	<div class="wrapper">
            <!-- Sidebar Holder -->
        <nav id="sidebar">
            <div class="sidebar-header">
                <img src="../assets/images/logo-afreight.png" class="img-fluid">
            </div>

            <ul class="list-unstyled components">
                <li>
                    <a href="#homeSubmenu" data-toggle="collapse" >Home<menu-down-icon class="right"/></a>
                    <ul class="collapse list-unstyled" id="homeSubmenu">
                        <li><a href="#">Home 1</a></li>
                        <li><a href="#">Home 2</a></li>
                        <li><a href="#">Home 3</a></li>
                    </ul>
                </li>
                <li>
                	<router-link :to="'/product'" exact class="nav-link">Products</router-link>
                    <a href="#pageSubmenu" data-toggle="collapse">Pages<menu-down-icon class="right"/></a>
                    <ul class="collapse list-unstyled" id="pageSubmenu">
                        <li><a href="#">Page 1</a></li>
                        <li><a href="#">Page 2</a></li>
                        <li><a href="#">Page 3</a></li>
                    </ul>
                </li>
                <li>
                    <router-link :to="'/user'" exact class="nav-link">User</router-link>
                </li>
                <li>
                    <router-link :to="'/'" exact>Logout</router-link>
                </li>
            </ul>
           
        </nav>

    </div>
</template>

<script>
	import MenuIcon from "vue-material-design-icons/menu-down.vue";
	
	export default {
		components: {
			'menu-down-icon' : MenuIcon,
		},
	
		mounted: function () {
	      
	        $('#sidebarCollapse').on('click', function () {
	            $('#sidebar, #content').toggleClass('active');
	            $('.collapse.in').toggleClass('in');

	        });
			  		
		}
	}
 	
</script>

<style scoped>
.right{
	float:right;
}
</style>