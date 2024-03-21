const {GraphQLObjectType, 
       GraphQLInt,
       GraphQLString,} = require ('graphql');

const UserType = new GraphQLObjectType({
    name: "User",
    fields: () =>({
        id: {type: GraphQLInt},
        full_name:{type: GraphQLString},
        email: {type: GraphQLString},
        password: {type: GraphQLString},
    })
});

module.exports = UserType;