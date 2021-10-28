import jwt from 'jsonwebtoken';
import { MY_SECRET_KEY } from "../config/jwt";

export const authorizationMiddleware = (req, res, next) =>{
    const authorization = req.headers.authorization;
    if(authorization) {
        try {
            const decoded = jwt.verify(authorization.replace('Bearer', ''), MY_SECRET_KEY)
            next();
        } catch (e) {
            res.send ({
                error: "Invalid token"
            });
        }
    }
};