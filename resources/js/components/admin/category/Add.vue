<template>
    <div id="category-add">
         <div class="content-wrapper">
                <!-- Content Header (Page header) -->
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                        </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
                            <li class="breadcrumb-item active">Category</li>
                        </ol>
                    </div>
                    </div>
                </div><!-- /.container-fluid -->
            </section>

                <!-- Main content -->
            <section class="content">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <div class="card card-primary card-outline">
                            <div class="card-header">
                                <h3 class="card-title">Product Category</h3>
                            </div>

                        <form method="post" @submit.prevent="storeCategory">
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Category Name</label>
                                    <input type="text" class="form-control" v-model="form.name" name="name" placeholder="Enter category name">
                                </div>
                                <span class="text-danger" v-if="errors['name']">
                                     {{ errors['name'][0] }}
                                </span>
                                <div class="form-group">
                                <label>Parent Category</label>
                                    <select class="form-control" v-model="form.parent_id" name="parent_id" style="width: 100%;">
                                        <option value="0" selected>Select Parent Category</option>
                                    </select>
                                </div>
                                <span class="text-danger" v-if="errors['parent_id']">
                                     {{ errors['parent_id'][0] }}
                                </span>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Priority</label>
                                    <input type="number" class="form-control" v-model="form.ordering" name="ordering" min="0" placeholder="Priority Order">
                                </div>
                                <span class="text-danger" v-if="errors['ordering']">
                                     {{ errors['ordering'][0] }}
                                </span>
                            </div>
                            <!-- /.card-body -->
                            <div class="card-footer">
                                <button type="submit" class="btn btn-primary float-right">Add Category</button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </section>
                <!-- /.content -->
        </div>
    </div>
</template>

<script>
    export default {
        name:"CategoryAdd",
        data(){
            return{
                form:{},
                errors:{}
            }
        },
        methods:{
            storeCategory(){
                 axios.post('categoryStore',this.form)
                 .then((result) => {
                     //console.log(result);
                    this.$router.push({name:'CategoryList'});
                 }).catch((err) => {
                     this.errors = err.response.data.errors;
                 });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
