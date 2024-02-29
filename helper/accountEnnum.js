import { GraphQLEnumType } from "graphql";

const accountEnum = new GraphQLEnumType({
name : "bankaccount",
values :{
    Investment :{
        value : "Investment"
    },
    Savings :{
        value : "Savings"
    },
    Priority : {
        value : "Priority"
    }
}
})

export {
    accountEnum
}