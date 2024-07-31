const express = require('express');
const database = require('better-sqlite3')('datab.db');
const cors = require('cors');

const app = express();
app.use(express.urlencoded({extended : true}))
app.use(express.json());
app.use(cors());


(function(){
  database.prepare(
    `CREATE TABLE IF NOT EXISTS todos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      _id TEXT NOT NULL,
      item TEXT NOT NULL,
      createdAt TEXT NOT NULL
    )`
  ).run();
})();

app.post('/api/todos', (req, res) => {
  try {
    const {_id, item, createdAt} = req.body;
    const results = database.prepare(`
        INSERT INTO todos (_id, item, createdAt) VALUES (?, ?, ?)
      `).run(_id, item, createdAt);
    res.status(201).json(results);
  } catch (error) {
    
  }
});

app.get('/api/todos', (req, res) => {
  try {
    const results = database.prepare(`
        SELECT * FROM todos
      `).all();
    res.status(200).json(results)
  } catch (error) {
    console.log(error);
  }
});

app.patch('/api/todos/:id', (req, res) => {
  try {
    const update_item = database.prepare(`
         UPDATE todos
      SET item = ?
      WHERE _id = ?
      `).run(req.body.item, req.params.id);
    res.status(200).json(update_item);
  } catch (error) {
    console.log(error);
  }
});


app.delete('/api/todos/:id', (req, res) => {
  try {
    const delete_result = database.prepare(`
      DELETE FROM todos WHERE _id = ?
    `).run(req.params.id);

    res.status(200).json(delete_result)
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});


app.listen(8080, () => console.log('server running on port 8080'));