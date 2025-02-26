import dotenv from "dotenv";

dotenv.config()

export default{
    port: process.env.PORT,
    databes_url:process.env.DATABES_URL
}