<template>
    <div id="user_register">
        <!-- login content section start -->
		<section class="pages login-page section-padding">
			<div class="container">
				<div class="row">
					<div class="col-sm-8 col-xs-offset-2">
						<div class="main-input padding60 new-customer">
							<div class="log-title">
								<h3 class="text-danger"><strong>customers registration</strong></h3>
							</div>
							<div class="custom-input">
								<form action="mail.php" method="post" @submit.prevent="UserRegistration">
									<input type="text" v-model="form.name" name="name" class="form-control" placeholder="Name here.." />
                                        <span class="text-danger" v-if="errors['name']">
                                            {{ errors['name'] }}
                                        </span>
									<input type="text" v-model="form.email" name="email" placeholder="Email Address.." />
                                        <span class="text-danger" v-if="errors['email']">
                                            {{ errors['email'] }}
                                        </span>
									<input type="text" v-model="form.phone" name="phone" placeholder="Phone Number.." />
                                        <span class="text-danger" v-if="errors['phone']">
                                            {{ errors['phone'] }}
                                        </span>
									<input type="password" v-model="form.password" name="password" placeholder="Password" />
                                        <span class="text-danger" v-if="errors['password']">
                                            {{ errors['password'] }}
                                        </span>
									<input type="password" v-model="form.password_confirmation" name="password_confirmation" placeholder="Confirm Password" />
                                    <textarea name="address" v-model="form.address" class="form-control" rows="2" placeholder="Enter your message...."></textarea>
									<div class="submit-text coupon">
										<button type="submit">Register</button>
									</div>
								</form>
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
        name:"UserRegister",
        data(){
            return{
                form:{},
                errors:{}
            }
        },
        methods:{
           UserRegistration(){
               axios.post('/register',this.form)
               .then((result) => {

               }).catch((err) => {
                   this.errors = err.response.data.errors
               });
           }
        }
    }
</script>

<style lang="scss" scoped>

</style>
