const express = require("express");
// const { ApolloServer } = require("apollo-server-express");
// const path = require("path");


const PORT = process.env.PORT || 3001;

const app = express();

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });
// Server.applyMiddleware({app})

app.use(express.urlencoded({extended: true}))
app.use(express.json())

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

// db.once("open", () => {
//   app.listen(PORT, () => {
//     console.log(`API server running on port ${PORT}!`);
//     console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
//   });
// });

 app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);