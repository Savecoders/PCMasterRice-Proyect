const app = require("./server.js");

app.listen(app.get("port"), () => {
  console.log("nuevo puerto", app.get("port"));
});
