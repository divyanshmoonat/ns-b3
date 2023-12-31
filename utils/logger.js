const { createLogger, format, transports } = require("winston");

const logger = createLogger({
    level: "info",
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    transports: [
        new transports.Console(),
        new transports.File({
            dirname: __dirname,
            filename: "error.log"
        })
    ]
});

module.exports = logger;