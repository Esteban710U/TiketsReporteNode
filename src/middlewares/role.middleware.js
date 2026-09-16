export function adminOnly(req,res,next){


    if(Number(req.user.rol) !== 1){

        return res.status(403).json({
            message:"Access denied. Admin only"
        });

    }


    next();

}