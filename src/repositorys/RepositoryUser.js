import { User } from "../models/modelUser.js";
import { Rol } from "../models/ModelRol.js";
import { Department } from "../models/ModelDepartment.js";
import { Specialization } from "../models/ModelSpecialization.js";


// ==========================================
// CREATE USER
// ==========================================

export function createUser(data) {

    return User.create(data)

        .then((response) => {

            return response;

        })

        .catch((error) => {

            throw error;

        });
}


// ==========================================
// GET ALL USERS
// ==========================================

export function getUser() {

    return User.findAll({

        // MODIFICADO:
        // Include permite traer los datos relacionados
        // de Rol, Department y Specialization
        // en lugar de solamente sus IDs.

        include: [

            {
                model: Rol
            },

            {
                model: Department
            },

            {
                model: Specialization
            }

        ]

    })

        .then((response) => {

            return response;

        })

        .catch((error) => {

            throw error;

        });
}


// ==========================================
// UPDATE USER
// ==========================================

export function updateUser(data, id) {

    return User.update(data, {

        where: {
            id_user: id
        }

    })

        .then((response) => {

            return response;

        })

        .catch((error) => {

            throw error;

        });
}


// ==========================================
// DELETE USER
// ==========================================

export function deleteUser(id) {

    return User.destroy({

        where: {
            id_user: id
        }

    })

        .then((response) => {

            return response;

        })

        .catch((error) => {

            throw error;

        });
}


// ==========================================
// GET USER BY FIRST NAME
// ==========================================

export function getUserName(first_name) {

    return User.findOne({

        where: {
            first_name: first_name
        },

        // MODIFICADO:
        // También incluimos las tablas relacionadas
        // cuando buscamos un usuario por nombre.

        include: [

            {
                model: Rol
            },

            {
                model: Department
            },

            {
                model: Specialization
            }

        ]

    })

        .then((response) => {

            return response;

        })

        .catch((error) => {

            throw error;

        });
}