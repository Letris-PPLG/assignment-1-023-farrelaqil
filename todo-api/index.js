import express from "express";
app.use(express.json());

let users = [
  { "id": 1, "title": "Belajar Node.js", "done": false },
  { "id": 2, "title": "Belajar Express.js", "done": true },
];

app.get("/users", (req,res) => {
    res.json(users);
})



app.post("/users", (req,res) => {
    const { name } = req.body;
    const newUser = {id:users.length + 1,name: name};
    users.push(newUser);
    res.status(201).json(newUser);
})

app.get("/test", (req,res) => 
{ res.send( {
  "msg": "API berjalan normal",
  "code": 200
})
});

app.listen(5001, () => console.log
("Server runing on http://localhost:5001"));