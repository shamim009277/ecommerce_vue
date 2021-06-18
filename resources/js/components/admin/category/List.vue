<template>
    <div id="category-list">
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
                <h3 class="card-title"><i class="fas fa-bars"></i> Category List</h3>
                <router-link :to="{name:'CategoryAdd'}"><a href="" class="btn btn-md btn-success float-right">Add Category</a></router-link>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="example1" class="table table-bordered table-striped">
                  <thead>
                  <tr>
                    <th>Sl</th>
                    <th>Category Name</th>
                    <th>Parent Category</th>
                    <th>Slug</th>
                    <th>Priority</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                      <tr v-for="(category,index) in allCategory" :key="category.id">
                           <td>{{index+1 }}</td>
                           <td>{{ category.name }}</td>
                           <td>{{ category.parent_id }}</td>
                           <td>{{ category.slug }}</td>
                           <td>{{ category.ordering }}</td>
                           <td>{{ category.is_active }}</td>
                           <td> Action </td>
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
        name:"CategoryList",
        mounted(){
            return this.$store.dispatch("admin/getAllCategory");
        },
        computed:{
            allCategory(){
                return this.$store.getters['admin/getAllCategory'];
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
