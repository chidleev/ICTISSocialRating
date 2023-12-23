module.exports = (client, Sequelize, DataTypes) => {
    const UserEvents = client.define("UserEvents", {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            unique: true,
            primaryKey: true
        },
        isPriced: {
            type: DataTypes.BOOLEAN,
        },  
    }, {});
    return UserEvents;
}