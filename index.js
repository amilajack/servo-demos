const express = require("express");
const app = express();
const port = 1234;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.use(
  express.static(".", {
    setHeaders: function (res, path) {
      res.set("Document-Policy", "js-profiling");
    },
  })
);
