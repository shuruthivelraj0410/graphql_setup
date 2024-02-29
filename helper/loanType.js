import { GraphQLInt, GraphQLObjectType, GraphQLSkipDirective, GraphQLString } from "graphql";

const loanType = new GraphQLObjectType({
name :"loanDetailssss",
fields :{
    loanId : {
        type : GraphQLInt,
        description : "loan Id of customer"
    },
    status : {
        type : GraphQLString,
        description : "Loan approval status"
    },
    type_of_loan : {
        type : GraphQLString,
        description :"loan type"
    }
}
})

export{
    loanType
}