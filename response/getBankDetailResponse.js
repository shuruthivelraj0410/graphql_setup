import { GraphQLEnumType, GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";
import {loanType} from "../helper/loanType.js"
const getBankDetailResponse  = new GraphQLObjectType({
    name :"getBankDetailsssss",
    fields : {
        id : {
            type : GraphQLInt,
            description : "customer id"
        },
        emailId : {
            type : GraphQLString,
            description :"Customer emailId"
        },
        balance : {
            type : GraphQLInt,
            description : "customer account balance"
        },
        loanDetails :{
            type : loanType,
            description : "loan details fetched as json"
        }
    }
})


export {
    getBankDetailResponse
}