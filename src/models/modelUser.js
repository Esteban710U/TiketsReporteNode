import { DataTypes} from "sequelize";
import { conn } from "../config/database.js";


export const User = conn.define("User", {

    id_user :{
        type : DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    first_name : {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name : {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone : {
        type: DataTypes.STRING,
        allowNull: false
    },
    email : {
        type: DataTypes.STRING,
        allowNull: false
    },
    password : {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    id_rol: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_departament: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_specialization: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps : true
}
    
)

