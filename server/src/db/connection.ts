import { Sequelize } from "sequelize"

const sequelize = new Sequelize('almacen', '', '', {
    host: 'localhost',
    dialect: 'postgres'
});

export default sequelize