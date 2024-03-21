const {GraphQLObjectType, 
       GraphQLSchema, 
       GraphQLInt,
       GraphQLString,
       GraphQLList} = require ('graphql');
const userData = require("../MOCK_DATA");
const UserType = require('./Types/User')

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields:{
        getAllUsers:{
            type: new GraphQLList(UserType),
            args: {id:{type:GraphQLInt}},
            resolve(parent, args){
                return userData
            }
        }
    }
}) 
const Mutation = new GraphQLObjectType({
    name: "mutation",
    fields:{
        createUser: {
            type: UserType,
            args: {
                full_name: {type: GraphQLString},
                email: {type: GraphQLString},
                password: {type: GraphQLString},
            },
            resolve(parent, args) {
                userData.push({id:userData.length+1,
                full_name: args.full_name,
                email: args.email,
                password: args.password})
                return args
            }
        }
    }
})


module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });