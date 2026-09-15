import jwt from "jsonwebtoken"
export function generateToken(user){


    return (
        {
            id: user.id,
            email: user.email,
            role: user.id_rol
        },
        process.env.JWT_SECRET,
        {
            expiresIn : "1d"
        }
    )
}