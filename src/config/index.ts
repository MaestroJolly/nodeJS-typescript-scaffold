import dotenv from "dotenv";
dotenv.config();


const config = {
    port: process.env.PORT || 3333
}

export default config;