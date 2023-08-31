const os = require('node:os');
const fs = require("node:fs");

// import axios from 'axios'; // ESM
// const axios = require("axios"); // CJS

// console.log("ARCH", os.arch());

// console.log("CPUS", os.cpus());

// console.log("CPU CORES", os.cpus().length);

// console.log("PARALLELISIM", os.availableParallelism());

// console.log("FREEMEM", (os.freemem() / (1024 ** 3)), "MB");

// console.log("HOME DIRECTORY", os.homedir());

// console.log("LOAD AVG", os.loadavg());

// console.log("NETWORK INTERFACES", os.networkInterfaces());

// console.log("PLATFORM", os.platform());

// console.log("OS RELEASE", os.release());

// console.log("TEMP DIR", os.tmpdir());

// console.log("TOTAL MEMORY", os.totalmem() / (1024 ** 3));

// let time = os.uptime() / 60 ** 2;
// time = time / 24;

// console.log("UPTIME", time);

// console.log("CONSTANTS", os.constants);

/**
 * OS
 * FS
 * http
 * crypto
 * etc
 */

/**
 * Write a file / create a file
 * fs.writeFile(filePath, fileContents, callbackFn)
 */
const writeFile = (fileContent) => {
    fs.writeFile("logs.txt", fileContent, (err) => {
        if (err) {
            console.log("ERROR WHILE WRITING THE FILE", err);
        }
    });
};
// writeFile(`Hi there
// this is a multi line
// data inserted into file`);


/**
 * Read a file
 * fs.readFile(filePath, callbackFn)
 */
const readFile = () => {
    fs.readFile("logs.txt", (err, fileData) => {
        if (err) {
            console.log("READ FILE ERROR", err);
            return;
        }
        console.log("FILE DATA", fileData.toString());
    })
};

readFile();