import axios from "axios"

export default{
    state:{
       auth:[],
    },
    getters:{
        getAuthData(state){
           return state.auth
        }
    },
    actions:{
        getAuthenticatedData(context){
            axios.get('user/')
            .then((result)=>{
                console.log(result);
                context.commit("getAuthData",result.data.user)
            })
        },
        userLogout(context){
           axios.post('/logout')
           .then((res) =>{
               context.commit("getAuthData",res.data)
               this.$router.push({name:"Home"})
           })
        }
    },
    mutations:{
        getAuthData(state,data){
            return state.auth = data
        }
    }
}
