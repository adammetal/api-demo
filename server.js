const express = require("express");

const app = express();

app.use(express.static('./frontend'));

app.get("/api/hello/:name", (req, res) => {
  const name = req.params.name;

  if (!name.length) {
    return res.status(400).json({
      message: "Missing name parameter",
    });
  }

  /*res.send(`
  <h1>Hello ${name}!</h1>
  `)*/
  res.json({ message: "Hello " + name });
});

app.listen(8000, '0.0.0.0' , () => {
  console.log("app listening on 8000");
});
