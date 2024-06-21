const { error } = require("console");
const fs = require("fs");

//File Creation: Creates New File(If Exists then overwrite the content of the file)
// fs.writeFileSync("test.txt", "Hello, this is my first file"); //Sync
fs.writeFile("./test.txt", "Hello, this is my first file", (error) => {
  if (error) {
    console.log(error);
  }
}); //Async

//This is Async: Means it does not return anything, instead it has callback which gives error and result object.
fs.readFile("test.txt", "utf-8", (error, result) => {
  if (error) {
    console.log("ERROR:", error);
  } else {
    console.log(result);
  }
});

//Both gives answer
// //This is Sync: Means it returns result and we can print it.
// const result = fs.readFileSync("test.txt", "utf-8");
// console.log(result);

//Following Deletes the file
fs.unlinkSync("./test.txt"); //Sync

//There are many Functions of File Handling.......