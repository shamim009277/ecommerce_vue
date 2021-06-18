<template>
    <div id="admin-login">
        <div class="row justify-content-center mx-auto">
            <div class="col-md-12" style="margin:80px 0px">
                <div class="login-box" style="margin:0 auto;">
                <!-- /.login-logo -->
                <div class="card card-outline card-primary">
                    <div class="card-header text-center">
                         <a href="#" class="h3"><b>Admin Dashboard</b></a>
                    </div>
                    <div class="card-body">
                        <form action="" method="post" @submit.prevent="adminLogin">
                            <div class="input-group mb-3 mt-3">
                                <input type="text" v-model="form.email" name="email" class="form-control" placeholder="Email">
                                <div class="input-group-append">
                                    <div class="input-group-text">
                                    <span class="fas fa-envelope"></span>
                                    </div>
                                </div>
                            </div>
                            <span class="text-danger" v-if="errors['email']">
                                {{ errors['email'][0] }}
                            </span>
                            <div class="input-group mb-3 mt-3">
                                <input type="password" v-model="form.password" name="password" class="form-control" placeholder="Password">
                                <div class="input-group-append">
                                    <div class="input-group-text">
                                    <span class="fas fa-lock"></span>
                                    </div>
                                </div>
                            </div>
                            <span class="text-danger" v-if="errors['password']">
                                {{ errors['password'][0] }}
                            </span>
                            <div class="row">
                            <div class="col-8">
                                <div class="icheck-primary">
                                    <input type="checkbox" id="remember">
                                    <label for="remember">
                                        Remember Me
                                    </label>
                                </div>
                            </div>
                            <!-- /.col -->
                            <div class="col-4">
                                <button type="submit" class="btn btn-primary btn-block">Sign In</button>
                            </div>
                            <!-- /.col -->
                            </div>
                        </form>

                        <div class="social-auth-links text-center mt-2 mb-3">
                            <a href="#" class="btn btn-block btn-primary">
                            <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
                            </a>
                            <a href="#" class="btn btn-block btn-danger">
                            <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
                            </a>
                        </div>
                         <!-- /.social-auth-links -->

                        <p class="mb-1">
                            <a href="#">I forgot my password</a>
                        </p>
                        <p class="mb-0">
                            <a class="text-center"><router-link :to="{name:'AdminRegister'}">Register a new membership</router-link></a>
                        </p>
                    </div>
                    <!-- /.card-body -->
                </div>
                <!-- /.card -->
            </div>
             <!-- /.login-box -->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"AdminLogin",
        data(){
            return{
                form:{},
                errors:{}
            }
        },
        methods:{
            adminLogin(){
                axios.post('login',this.form)
                .then((res) => {
                    localStorage.setItem("adminLogin", JSON.stringify(res.data));
                    this.$router.push({ name: 'AdminDashboard'});
                }).catch((err) => {
                    this.errors = err.response.data.errors
                });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
