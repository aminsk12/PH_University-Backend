import config from "../../config";
import AppError from "../../errors/AppError";
import { User } from "../User/user.model";
import { TLoginUser } from "./auth.interface";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const loginUser = async (payload: TLoginUser) => {
  // chacking if user exist
  const isUserExist = await User.findOne({ id: payload?.id });

  console.log(isUserExist);
  if (!isUserExist) {
    throw new AppError(500, "User does not exist");
  }

  //chacking if user deleted
  const isUserDeleted = isUserExist?.isDeleted;
  if (isUserDeleted) {
    throw new AppError(500, "User is deleted ! Please contact admin");
  }

  //chacking if user is blocked
  const isUserBlocked = isUserExist?.status;
    if (isUserBlocked === "Bolcked") {
        throw new AppError(500, "User is blocked ! Please contact admin");
    }

    //chacking if user password is correct
    const isPasswordMatched = await bcrypt.compare(
        payload?.password, isUserExist.password
    );
    if (!isPasswordMatched) {
        throw new AppError(500, "Password is incorrect");
    }


    const jwtPayload = {
        id: isUserExist.id,
        email: isUserExist.email,
        role: isUserExist.role,
    };
    // Generate JWT token
    const accessToken = jwt.sign(jwtPayload, config.jwt_access_token as string, {
        expiresIn: "10d",}
    )
  
  return {
    accessToken,
    needsPasswordChange: isUserExist?.needsPasswordChange,
  };

};





export const AuthService = {
  loginUser,
};
