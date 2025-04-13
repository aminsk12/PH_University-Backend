import dotenv from "dotenv";

dotenv.config()

export default{
    port: process.env.PORT,
    databes_url:process.env.DATABES_URL,
    bcrypt_salt_round: process.env.BCRYPT_SALT_ROUNDS,
    default_pass:process.env.DEFAULT_PASSWORD

}