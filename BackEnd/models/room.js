'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Room extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Room.belongsTo(models.TypeRoom, {
                foreignKey: 'typeRoomId'
            });
            Room.belongsTo(models.Hotel, {
                foreignKey: 'hotelId'
            });
        }
    };
    Room.init({
        name: DataTypes.STRING,
        total: DataTypes.STRING,
        typeRoomId: DataTypes.INTEGER,
        hotelId: DataTypes.INTEGER,
        price: DataTypes.INTEGER,
        status: DataTypes.BOOLEAN,
    }, {
        sequelize,
        modelName: 'Room',
    });
    return Room;
};