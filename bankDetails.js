import { GraphQLID, GraphQLInt, GraphQLObjectType } from "graphql";
import { getBankDetailResponse} from "./response/getBankDetailResponse.js"
import { getBankDetailsResolver} from "./resolver/getBankDetailsResolver.js"
import { accountEnum} from "./helper/accountEnnum.js"
const getBankDetails = {
    type : getBankDetailResponse,
    args : {
        id : {
            type : GraphQLInt,
            description : "Id of the bank customer"
        },
        accountType :{
            type : accountEnum,
            description : "customer account Types"
        }
    },
    resolve : getBankDetailsResolver
}

export{
    getBankDetails
}