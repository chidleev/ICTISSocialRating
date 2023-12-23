module.exports = (client, Sequelize, DataTypes) => {
    const Events = client.define("Events", {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            unique: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        startDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING
        },
        ratingValue: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        imgUrl: {
            type: DataTypes.ARRAY(DataTypes.STRING)
        }
    }, {});
    return Events;
}