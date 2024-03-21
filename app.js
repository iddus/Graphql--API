const express = require("express");
const app = express();
const { graphqlHTTP } = require('express-graphql');
const PORT = "6969";
const schema = require("./Schemas/index")

app.use(
    "/graphql", 
     graphqlHTTP({
        schema,
        graphiql: true
    })
);

app.listen(PORT,() =>{
    console.log("Server running");
});