const { readFile, writeFile, read, write } = require("fs");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) return;

  const first = result;
  readFile(
    "./content/second.txt",
    "utf8",
    (err, result) => {
      if (err) return;
      const second = result;
      writeFile(
        "./content/result-async.txt",
        `result: ${first}, ${second}`,
        (err, result) => {
          if (err) return err;
          console.log(result);
        }
      );
    }
  );
});
