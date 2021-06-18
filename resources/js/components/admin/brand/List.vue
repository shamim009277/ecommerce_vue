<template>
    <div id="brand-list">
        <div class="content-wrapper">
                <!-- Content Header (Page header) -->
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                    <div class="col-sm-6">
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active">Dashboard</li>
                        </ol>
                    </div>
                    </div>
                </div><!-- /.container-fluid -->
            </section>

                <!-- Main content -->
            <section class="content">
                <!-- Default box -->
                <div class="card card-primary card-outline">
              <div class="card-header">
                <h3 class="card-title"><i class="fas fa-bars"></i> Brand List</h3>
                <router-link :to="{name:'BrandAdd'}"><a href="" class="btn btn-md btn-success float-right">Add Brand</a></router-link>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="example1" class="table table-bordered ">
                  <thead>
                    <tr>
                        <th>Sl</th>
                        <th>Name</th>
                        <th>Priority</th>
                        <th>Slug</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                      <tr v-for="(brand,index) in allBrands" :key="brand.id">
                          <td>{{ index+1 }}</td>
                          <td>{{ brand.name }}</td>
                          <td>{{ brand.ordering }}</td>
                          <td>{{ brand.slug }}</td>
                          <td>{{ brand.is_active }}</td>
                          <td>action</td>
                      </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
                <!-- /.card -->
            </section>
                <!-- /.content -->
        </div>
    </div>
</template>

<script>
    export default {
        name:"BrandList",
        mounted(){
            return this.$store.dispatch("admin/getAllBrand");
        },
        computed:{
            allBrands(){
                return this.$store.getters['admin/getAllBrand'];
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
