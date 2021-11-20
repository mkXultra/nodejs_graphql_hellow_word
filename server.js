var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
    hello2(name:String): hello2
  }
  type hello2 {
    name: String
    message: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
  hello2: (arg) => {
    if(arg && arg.name == 'aiueo'){
        name = arg.name
        message = arg.name + 'message'
      return {
        name,message
      }
    }
    return {
      'name': 'this is name',
      'message': 'this is message',
    };
  },
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');