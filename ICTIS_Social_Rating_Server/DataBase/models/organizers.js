module.exports = (client, Sequelize, DataTypes) => {
    const Organizers = client.define("Organizers", {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            unique: true,
            primaryKey: true
        },
        description: {
            type: DataTypes.STRING,
        },
        isVerify: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {});
    return Organizers;
}