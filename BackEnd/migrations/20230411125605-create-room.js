'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Rooms', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            total: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            typeRoomId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'TypeRooms',
                    key: 'id'
                },
                onDelete: 'CASCADE'
            },
            hotelId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Hotels',
                    key: 'id'
                },
                onDelete: 'CASCADE'
            },
            price: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            status: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Rooms');
    }
};