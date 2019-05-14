module.exports = function( sequelize, DataTypes) {
    return sequelize.define("books", { //what I put is the name of my table in postgres
        nameOfBook: {
            type: DataTypes.STRING,
            notEmpty: true
        },
        author: {
            type: DataTypes.STRING,
            notEmpty: true
        },
        genre: {
            type: DataTypes.STRING,
            notEmpty: true
        },
        pubYear: {
            type: DataTypes.INTEGER,
            notEmpty: true
        },
        rating: {
            type: DataTypes.INTEGER,
            notEmpty: true
        }
    })

    return books
}