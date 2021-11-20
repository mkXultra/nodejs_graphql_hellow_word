const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const fs = require('fs');
const schemaStr = fs.readFileSync('./schema.graphql','utf8')
const schema = buildSchema(schemaStr);

// The root provides a resolver function for each API endpoint
const root = {
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

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');