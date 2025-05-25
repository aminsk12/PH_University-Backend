import dotenv from "dotenv";

dotenv.config()

export default{
    NODE_ENV: process.env.NODE_ENV,
    port: process.env.PORT,
    databes_url:process.env.DATABES_URL,
    bcrypt_salt_round: process.env.BCRYPT_SALT_ROUNDS,
    default_pass:process.env.DEFAULT_PASSWORD,
    jwt_access_token: process.env.JWT_ACCESS_SECRET,
    


}