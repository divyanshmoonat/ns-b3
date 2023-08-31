const os = require('node:os');
const fs = require("node:fs");
const events = require("node:events");


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
// writeFile(`Hello from fs module`);


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
        // return fileData.toString();
    })
};

// readFile();

const updateFile = () => {
    /**
     * 1. Read the file
     * 2. Modify the contents
     * 3. Write the file
     */

    // const fileData = fs.readFileSync("logs.txt");

    // let contents = fileData.toString();
    // contents = contents + "\nFILE IS EDITED USING FS MODULE";

    // fs.writeFileSync("logs.txt", contents);

    // console.log("FILE EDITED SUCCESSFULLY");

    fs.appendFileSync("logs.txt", "\nThis is new line with new method");
};

// updateFile();

const deleteFile = () => {
    fs.unlinkSync("logs.txt");
};

// deleteFile();


let colorIndex = 0;

const writeLogs = (color) => {
    const timeStamp = new Date();
    const logStr = timeStamp + " Signal changed to " + color + "\n";
    // 31/08/2023 21:41:00 Signal changed to Green
    fs.appendFileSync("signal.log", logStr);
};

// setInterval(() => {
//     writeLogs();
//     if (colorIndex === 2) {
//         colorIndex = 0;
//     } else {
//         colorIndex++;
//     }
// }, 5000);

/**
 * 1. Emit the event
 * 2. Listen the event
 */

const myEmitter = new events.EventEmitter();

const SIGNAL_CHANGE = 'SIGNAL_CHANGE';

myEmitter.on(SIGNAL_CHANGE, writeLogs);

const colors = ["Green", "Yellow", "Red"];

// setInterval(() => {
//     myEmitter.emit(SIGNAL_CHANGE, colors[colorIndex]);
//     if (colorIndex === 2) {
//         colorIndex = 0;
//     } else {
//         colorIndex++;
//     }
// }, 5_000);