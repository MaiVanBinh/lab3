const fs = require("fs");

exports.jsonToObj = (path) => {
  const dataString = fs.readFileSync(path, {
    encoding: "utf-8",
  });
  const dataString2 = dataString === "" ? "[]" : dataString;

  const oldData = JSON.parse(dataString2);
  return oldData;s
};
