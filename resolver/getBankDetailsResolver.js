

const getBankDetailsResolver = async(parent,context,args,info)=>{

    let response = {
        id : 12,
        emailId :"shuruthi",
        balance : 45000,
        loanDetails : {
            loanId : 1,
            status : "Approved",
            type_of_loan : "car loan"
        }
    }
    return response
}



export {
    getBankDetailsResolver
}