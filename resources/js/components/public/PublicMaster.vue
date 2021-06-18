<template>
    <div class="public_master">
       <public-header></public-header>
       <public-bread-crum></public-bread-crum>
       <router-view></router-view>
       <public-footer></public-footer>
    </div>
</template>

<script>
import PublicHeader from '../public/section/Header';
import PublicFooter from '../public/section/Footer';
import PublicBreadCrum from '../public/section/PublicBreadCrum';
    export default {
        name:"PublicMaster",
        components:{
              PublicHeader,PublicFooter,PublicBreadCrum

        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
