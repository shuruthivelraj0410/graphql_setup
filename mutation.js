import { GraphQLObjectType } from "graphql"
import {addCustomer} from "./Addcustomer.js"
const mutation = new GraphQLObjectType({
    name : "mutations",
    description : "mutations of different fields can be combined together here",
    fields : {
        addCustomer
    }
})

export {
    mutation
}