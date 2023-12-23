module.exports = (client, Sequelize, DataTypes) => {
    const Ratings = client.define("Ratings", {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            unique: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
        },
        imgUrl: {
            type: DataTypes.STRING,
        }
    }, {});
    return Ratings;
}