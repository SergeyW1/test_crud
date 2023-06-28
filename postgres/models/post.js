const {DataTypes, Model} = require('sequelize');
const sequelize = require('../connection')

class Post extends Model {
}

Post.init({
    // Model attributes are defined here
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING
        // allowNull defaults to true
    }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Post' // We need to choose the model name
});

module.exports = Post
