module.exports = (client, Sequelize, DataTypes) => {
    const Users = client.define("Users", {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            unique: true,
            primaryKey: true
        },
        login: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        FIO: {
            type: DataTypes.STRING,
            allowNull: false
        },
        course: {
            type: DataTypes.INTEGER,
        },
        imgUrl: {
            type: DataTypes.STRING,
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {});
    return Users;
};