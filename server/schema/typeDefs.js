const { gql } = require("apollo-server");

const typeDefs = gql`
    scalar JSON
    
    type Watch{
        id: ID!
        brand: String!
        model: String!
        price: Float!
        description: String!
        imageUrl: String!
        color: Color
        specs: JSON
        features: JSON
    }

    enum Color{
        WHITE
        BLACK
        GREEN
        RED
        BLUE
        YELLOW
        MILITARY
        DARKGREY
        BROWN
        BEIGE
        GOLD
        ROSEGOLD
        SILVER
    }

    type Query{
        watches(first: Int): [Watch!]!
        watch(id: ID!): Watch
    }
`

module.exports = { typeDefs }