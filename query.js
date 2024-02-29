import { GraphQLObjectType } from "graphql"
import {getBankDetails} from "./bankDetails.js"
const query = new GraphQLObjectType({
    name:"queries",
    description :"contains all queries of field over here with separate resolvers",
    fields :{
      getBankDetails
    //   getLoanStatus
    }
})




export{
    query
}