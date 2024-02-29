import { GraphQLObjectType, GraphQLString } from "graphql"

const responseAfterAdding = new GraphQLObjectType({
    name : "addCustomersssssss",
    fields :{
        code : {
            type : GraphQLString,
            description : "Status Code"
        },
        status : {
            type : GraphQLString,
            description : "Status message"
        }
    }
})




export { responseAfterAdding }