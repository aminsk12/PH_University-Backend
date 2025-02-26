/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";


async function main() {
    try {
        await mongoose.connect(config.databes_url as string);

        app.listen(config.port, () => {
            console.log(`app listening on port ${config.port}`)
        })

    } catch (err:any) {
        console.log(err);
        throw new Error(err)
    }
}

main()