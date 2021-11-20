const { GraphQLClient, gql } =  require('graphql-request')
const query = gql`{
  hello2(name:"kakikukeko"){name,message}
}`

const query2 = gql`{
  hello2(name:"aiueo"){name,message}
}`
const client = new GraphQLClient('http://localhost:4000/graphql')
async function main(){
  console.log("default req", await client.request(query))
  console.log("custom req", await client.request(query2))
}
main()