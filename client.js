const { GraphQLClient, gql } =  require('graphql-request')
const query = gql`{
  hello2(name:"aiueo"){name,message}
}`
const client = new GraphQLClient('http://localhost:4000/graphql')
async function main(){
  const data = await client.request(query)
  console.log("data", data)

}
main()