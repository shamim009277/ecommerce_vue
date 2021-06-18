import axios from "axios"

export default{
    namespaced: true,
    state:{
        admin:{},
        brand:{},
        category:{}
    },
    getters:{
       getAuthData(state){
          return state.admin;
       },
       getAllBrand(state){
          return state.brand;
       },
       getAllCategory(state){
          return state.category;
       }
    },
    actions:{
        getAuthenticatedData(context){
          axios.get('getdata')
          .then((result)=>{
             context.commit("getAuthData",result.data.admin)
        }).catch((err)=>{

        })
       },
       getAllBrand(context){
          axios.get("getbrand")
          .then((result) => {
              context.commit("getAllBrand",result.data.brand);
          }).catch((err) => {

          });
       },
       getAllCategory(context){
           axios.get("getCategory")
           .then((result) => {
               context.commit("getAllCategory",result.data.category);
           }).catch((err) => {

           });
       }
    },
    mutations:{
        getAuthData(state,data){
            return state.admin = data;
        },
        getAllBrand(state,data){
            return state.brand = data;
        },
        getAllCategory(state,data){
            return state.category = data;
        }
    }
}
