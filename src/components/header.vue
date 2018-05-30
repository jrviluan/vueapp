<template>
    <div>
        <nav class="navbar navbar-inverse navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Vue</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                      <router-link :to="'/Home'" exact class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link :to="'/showBlogs'" exact class="nav-link">Blog</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link :to="'/addBlogs'" exact class="nav-link">Add Blog</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link :to="'/User'" exact class="nav-link">User</router-link>
                    </li>
                </ul>
                <router-link :to="'/'" exact>Logout</router-link>
            </div>
        </nav>
       
    </div>
</template>

<script>
   
    export default{
        
    }
</script>

<style scoped>
    .router-link-active {
        border-bottom: 4px solid #fff;
    }
</style>