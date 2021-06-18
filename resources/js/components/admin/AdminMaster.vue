<template>
    <div id="admin-master">
         <!-- Navbar -->
            <admin-header  v-if=" $route.name !=  'AdminRegister' && $route.name !=  'AdminLogin' " />
            <admin-sidebar v-if=" $route.name !=  'AdminRegister' && $route.name !=  'AdminLogin' "/>
            <!-- Content Wrapper. Contains page content -->

            <router-view ></router-view>
            <!-- /.content-wrapper -->
            <admin-footer v-if=" $route.name !=  'AdminRegister' && $route.name !=  'AdminLogin' "/>
    </div>
</template>

<script>
    import AdminHeader from '../admin/section/Header';
    import AdminSidebar from '../admin/section/Sidebar';
    import AdminFooter from '../admin/section/Footer';

    export default {
        name: "AdminMaster",
        components:{
            AdminHeader,AdminSidebar,AdminFooter
        },
    }
</script>

<style lang="scss" scoped>

</style>
