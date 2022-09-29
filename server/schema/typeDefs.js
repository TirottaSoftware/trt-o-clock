const { gql } = require("apollo-server-express");

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

    enum SortOrder{
        ASC
        DESC
    }

    enum SortableField{
        model
        price
    }

    input Sort{
        field: SortableField
        order: SortOrder = ASC
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
        watches(first: Int, brand: String, color: Color, sort: Sort): [Watch!]!
        watch(id: ID!): Watch
    }
`

module.exports = { typeDefs }