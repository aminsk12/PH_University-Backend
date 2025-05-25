import { Router } from "express";
import { AuthController } from "./auth.controller";
import validateRequest from "../../middlwares/validateRequest";
import { AuthValidation } from "./auth.validation";

const router = Router();

router.post(
  "/login",
  validateRequest(AuthValidation.loginValidationSchema),
  AuthController.loginUser
);

export const authRoute = router;
