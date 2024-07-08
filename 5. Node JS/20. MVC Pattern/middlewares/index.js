const fs = require("fs");

const logReqRes = (fileName) => {
  return (req, res, next) => {
    console.log("HELLO FROM MIDDLEWARE 1");
    fs.appendFile(
      fileName,
      `${Date.now()}: ${req.method} ${req.path}\n`,
      (err) => {
        if (err) {
          console.log("ERROR!!");
        } else {
          next();
        }
      }
    );
  };
};

module.exports = logReqRes;
