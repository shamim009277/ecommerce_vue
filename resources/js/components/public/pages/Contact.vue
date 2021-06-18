<template>
    <div id="contact">
        <div class="pages contact-page section-padding">
			<div class="container text-center">
				<div class="row">
					<div class="col-sm-12">
						<div class="googleMap-info">
							<div id="googleMap"></div>
							<div class="map-info">
								<p><strong>Sellshop</strong></p>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-10 col-text-center">
						<div class="contact-details">
							<div class="row">
								<div class="col-sm-4">
									<div class="single-contact">
										<i class="mdi mdi-map-marker"></i>
										<p>No 58 A, East Madison Street,</p>
										<p>Baltimore, MD, USA 4508</p>
									</div>
								</div>
								<div class="col-sm-4">
									<div class="single-contact">
										<i class="mdi mdi-phone"></i>
										<p>(+660) 803 - 080 - 3081</p>
										<p>(+660)  803 - 080 - 3082</p>
									</div>
								</div>
								<div class="col-sm-4">
									<div class="single-contact">
										<i class="mdi mdi-email"></i>
										<p>info@companyname.com</p>
										<p>support@company.com</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
    export default {
        name:"Contact",
        data(){
          return{
             coordinates:{
                 lat:0,
                 lng:0,
             }
          }
        },
        methods:{
            created(){
                this.$getLocation({})
                .then(coordinates => {
                    console.log(coordinates);
                });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
