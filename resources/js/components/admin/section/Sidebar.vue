<template>
    <div id="admin_sidebar">
        <!-- Main Sidebar Container -->
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <!-- Brand Logo -->
            <a href="#" class="brand-link">
            <img src="#" alt="Dashboard" class="brand-image img-circle elevation-3" style="opacity: .8">
            </a>

            <!-- Sidebar -->
            <div class="sidebar">
            <!-- Sidebar user (optional) -->
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                <img src="#" class="img-circle elevation-2">
                </div>
                <div class="info">
                <a href="#" class="d-block">{{ admin.name }}</a>
                </div>
            </div>
            <!-- SidebarSearch Form -->
            <div class="form-inline">
                <div class="input-group" data-widget="sidebar-search">
                <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
                <div class="input-group-append">
                    <button class="btn btn-sidebar">
                    <i class="fas fa-search fa-fw"></i>
                    </button>
                </div>
                </div>
            </div>

            <!-- Sidebar Menu -->
            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <!-- Add icons to the links using the .nav-icon class
                    with font-awesome or any other icon font library -->
                <li class="nav-item">
                    <a class="nav-link">
                    <router-link :to="{name:'AdminDashboard'}">
                        <i class="nav-icon fas fa-tachometer-alt"></i>
                        <p>Dashboard</p>
                    </router-link></a>
                </li>

                <li class="nav-item">
                    <a class="nav-link">
                        <router-link :to="{name:'BrandList'}">
                        <i class="nav-icon fas fa-bars"></i>
                        <p>Brand</p>
                        </router-link>
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link">
                        <router-link :to="{name:'CategoryList'}">
                        <i class="nav-icon fas fa-bars"></i>
                        <p>Category</p>
                        </router-link>
                    </a>
                </li>

                <li class="nav-item">
                    <a href="#" class="nav-link">
                    <i class="nav-icon fas fa-cog"></i>
                    <p>
                        Setting
                        <i class="fas fa-angle-left right"></i>
                    </p>
                    </a>
                    <ul class="nav nav-treeview">
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>Inbox</p>
                        </a>
                    </li>
                    </ul>
                </li>

                </ul>
            </nav>
            <!-- /.sidebar-menu -->
            </div>
            <!-- /.sidebar -->
        </aside>
    </div>
</template>

<script>
    export default {
        name:"AdminSidebar",
        data(){
            return{

            }
        },
        computed:{
            admin(){
                return this.$store.getters['admin/getAuthData'];
            }
         },
         methods:{
            getAuthData(){
                this.$store.dispatch('admin/getAuthenticatedData');
            }
         },
         created(){
             this.getAuthData();
         }
    }
</script>

<style lang="scss" scoped>

</style>
