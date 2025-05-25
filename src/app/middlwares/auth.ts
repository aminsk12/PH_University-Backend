import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catctAsync";
import AppError from "../errors/AppError";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import { TUserRole } from "../modules/User/user.interface";

const auth = (...requereRole: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
      throw new AppError(500, "You no authorized to access this route");
    }

    //chaking token
    jwt.verify(
      token,
      config.jwt_access_token as string,
      function (err, decoded) {
        if (err) {
          throw new AppError(500, "You are not authorized");
        }

        //chaking user role
        if (
          requereRole.length &&
          !requereRole.includes((decoded as JwtPayload).role)
        ) {
          throw new AppError(500, "You are not authorized");
        }

        //decoded user
        req.user = decoded as JwtPayload;
        next();
      }
    );
  });
};

export default auth;
