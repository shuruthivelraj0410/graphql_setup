import {responseAfterAdding} from "./response/addCustomerResponse.js"
import { addCustomerResolver } from "./resolver/AddCustomerResolver.js"
import { GraphQLNonNull, GraphQLString } from "graphql";
import { accountEnum} from "./helper/accountEnnum.js"
const addCustomer = {
    type : responseAfterAdding,
    args : {
      emailId : {
        type : new GraphQLNonNull(GraphQLString),
        description : "emailId of a customer"
      },
      accountType : {
        type : accountEnum,
        description : "Account type"
      },
      loanPreferred : {
        type : GraphQLString
      }
    },
    resolve : addCustomerResolver
}




export {
    addCustomer
}