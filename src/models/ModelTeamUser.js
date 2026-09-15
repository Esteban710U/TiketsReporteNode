import { DataTypes } from "sequelize";
import { conn } from "../config/database.js";

export const TeamUser = conn.define("TeamUser", {
    id_teamuser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
},{
    timestamps: false
})