"use strict";
// create mocha instance
const Mocha = require("mocha");
let mochaMain = new Mocha({
    reporter: 'mocha-rp-reporter',
    reporterOptions: {
        configOptions: {
            endpoint: "",
            username: "",
            password: "",
            launch: "",
            project: "",
            tags: [
                ""
            ]
        },
        configFile: "reportportal.json"
    }
});


// run tests
try{
    mochaMain.files = ["./test/test.js"];
    mochaMain.run((failures) => process.on('exit', () => process.exit(failures))); // exit with non-zero exit code, other wise fails will not fail mocha run
} catch (err) {
    console.error(`Test suite doesn't exists or set. Error: ${err}`);
}



