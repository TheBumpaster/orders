import * as express from "express";

const application = express();

application.set("PORT", process.env.PORT ? process.env.PORT : 8080);

application.listen(() => {
    //
});

export default application;
