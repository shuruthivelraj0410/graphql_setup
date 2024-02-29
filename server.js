import express from 'express';
import dotenv from 'dotenv';
import { expressPlayground } from 'graphql-playground-middleware';
import { graphqlHTTP } from 'express-graphql';
import { applyMiddleware } from 'graphql-middleware';
import {Schema} from './schema.js'
dotenv.config();
const port = process.env.PORT;
const app = express();
const schemaWithMidleware = applyMiddleware(Schema)

app.use('/shuruthi',(req,res)=>{
    try {
    graphqlHTTP({ 
        schema : schemaWithMidleware,
        rootValue : global,
        graphiql : true
     })(req, res)
    }
    catch(e){
        console.log(e)
    }
})
app.get('/playground',expressPlayground({
    endpoint :"/shuruthi"
}))
app.listen(port,(err)=>{
    console.log('listening to port : ',process.env.PORT)
})