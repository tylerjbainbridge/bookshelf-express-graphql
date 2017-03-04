const typeDefinitions = `
  type Todo {
    id: Int
    content: String
    completed: Boolean
  }
  type Query {
    hello: String
    todos: [Todo]
    todo(id: Int!): Todo
  }
  schema {
    query: Query
  }
`;

module.exports = [typeDefinitions];