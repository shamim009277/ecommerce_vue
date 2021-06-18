<template>
    <div id="user_login">
        <!-- login content section start -->
		<section class="pages login-page section-padding">
			<div class="container">
				<div class="row">
					<div class="col-sm-8 col-xs-offset-2">
						<div class="main-input padding60">
							<div class="log-title">
								<h3 class="text-center"><strong>customer registration</strong></h3>
							</div>
							<div class="login-text">
								<div class="custom-input">
									<p class="text-center">If you have an account with us, Please log in!</p>
									<form action="mail.php" method="post" @submit.prevent="UserLogin">
										<input type="text" v-model="form.email" name="email" placeholder="Email" />
                                            <span class="text-danger" v-if="errors['email']">
                                                {{ errors['email'][0] }}
                                            </span>
										<input type="password" v-model="form.password" name="password" placeholder="Password" />
                                            <span class="text-danger" v-if="errors['password']">
                                                {{ errors['password'][0] }}
                                            </span>
										<a class="forget" href="#">Forget your password?</a>
										<div class="submit-text">
											<button type="submit">Login</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    </div>
</template>

<script>
    export default {
        name:"UserLogin",
        data(){
            return{
                form:{},
                errors:{}
            }
        },
        methods:{
            UserLogin(){
                axios.post('/login',this.form)
                .then((result) => {
                    localStorage.setItem('UserLogin',true)
                    this.$router.push({ name: 'UserDashboard' })
                }).catch((err) => {
                    this.errors = err.response.data.errors
                });
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
