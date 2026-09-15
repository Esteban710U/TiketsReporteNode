import { DataTypes } from "sequelize";
import { conn } from "../config/database.js";
import { User } from "./modelUser.js";
import { WorkTeam } from "./ModelWorkTeam.js";

export const TeamUser = conn.define("TeamUser", {
    id_teamuser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
},{
    timestamps: false
})