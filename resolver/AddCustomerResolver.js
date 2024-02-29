
const addCustomerResolver = async(parent , args,context, info)=>{
   let data = {
    code : 200,
    status : "Successfully saved"
   }
   return data
}


export {
    addCustomerResolver
}