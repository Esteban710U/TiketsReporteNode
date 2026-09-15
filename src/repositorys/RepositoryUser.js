import { User } from "../models/modelUser.js";
import { Rol } from "../models/ModelRol.js";
import { Department } from "../models/ModelDepartment.js";
import { Specialization } from "../models/ModelSpecialization.js";


//create user
export function createUser(data) {

    return User.create(data)

        .then((response) => {

            return response;

        })

        .catch((error) => {

            throw error;

        });
}


//get all user 

export function getUser() {

    return User.findAll({
        include: [

            {
                model: Rol,
                attributes: ["name"]
            },

            {
                model: Department,
                attributes:["name"]
            },

            {
                model: Specialization,
                attributes: ["name"]
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


//update user

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


//Delete user 

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


//Get user by name 
export function getUserName(first_name) {

    return User.findOne({

        where: {
            first_name: first_name
        },
        include: [

            {
                model: Rol,
                attributes: ["name"]
            },

            {
                model: Department,
                attributes: ["name"]
            },

            {
                model: Specialization,
                attributes:["name"]
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