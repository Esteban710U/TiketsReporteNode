import { DataTypes } from "sequelize";
import { conn } from "../config/database.js";

export const Ticket = conn.define("tickets", {
    id_ticket: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },

    closedAt: {
        type: DataTypes.DATE,
        allowNull: true
    },
},{
    timestamps: true
})