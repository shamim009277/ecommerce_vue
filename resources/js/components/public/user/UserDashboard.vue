<template>
    <div id='user_dashboard'>
        <h1>User Dashboard</h1>
    </div>
</template>

<script>
    export default {
        name:"UserDashboard",
        mounted(){
            this.$store.dispatch("getAuthenticatedData")
        },
        computed:{
            getAuthUserData(){
                return this.$store.getters.getAuthData
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
