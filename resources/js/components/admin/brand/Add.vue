<template>
    <div id="brand-id">
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
                            <li class="breadcrumb-item active">Brand</li>
                        </ol>
                    </div>
                    </div>
                </div><!-- /.container-fluid -->
            </section>

                <!-- Main content -->
            <section class="content">
                <!-- Default box -->
                <div class="row justify-content-center">
                    <div class="col-md-6">
                    <div class="card card-primary card-outline">
                    <div class="card-header">
                        <h3 class="card-title">Product Brand</h3>
                    </div>

                <form method="post" @submit.prevent="addBrand">
                    <div class="card-body">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Brand Name</label>
                            <input type="text" class="form-control" v-model="form.name" name="name" placeholder="Enter brand name">
                        </div>
                        <span class="text-danger" v-if="errors['name']">
                                {{ errors['name'][0] }}
                        </span>

                        <div class="form-group">
                            <label for="exampleInputPassword1">Priority</label>
                            <input type="number" class="form-control" v-model="form.ordering" name="ordering" placeholder="Priority Order" min="0">
                        </div>
                        <span class="text-danger" v-if="errors['ordering']">
                                {{ errors['ordering'][0] }}
                        </span>
                    </div>
                    <!-- /.card-body -->
                    <div class="card-footer">
                        <button type="submit" class="btn btn-primary float-right">Submit</button>
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
        name:"BrandAdd",
        data(){
            return{
                form:{},
                errors:{}
            }
        },
        methods:{
            addBrand(){
                axios.post('store',this.form)
                .then((res)=>{
                    console.log(res);
                   this.$router.push({name:"BrandList"});
                }).catch((err)=>{
                     this.errors = err.response.data.errors;
                });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
