<template>
    <!-- pages-title-start -->
		<div class="pages-title section-padding">
			<div class="container">
				<div class="row">
					<div class="col-xs-12">
						<div class="pages-title-text text-center">
							<h2>{{$route.name}}</h2>
							<ul class="text-left">
								<li><router-link to="/">Home </router-link></li>
								<li><span> // </span>{{$route.name}}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- pages-title-end -->
</template>

<script>
    export default {
        name:"PublicBreadCurm"
    }
</script>

<style lang="scss" scoped>

</style>
