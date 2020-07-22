const peopleControllers = []

const pool = require('../src/database');

peopleControllers.get = (req, res) => {
    pool.query('SELECT * FROM people', function(err, data) {
        res.json(data);
    })
}

peopleControllers.post = (req, res) => {
    pool.query('INSERT INTO people set ?', [req.body], function() {
        res.json({text: 'People Saved'})
    })
}

peopleControllers.delete = (req, res) => {
    const { id } = req.params;
    pool.query('DELETE FROM people WHERE id = ?', [id], function() {
        res.json({text: 'People Deleted'})
    })
}

peopleControllers.put = (req, res) => {
    const { id } = req.params;
    pool.query('UPDATE people set ? WHERE id = ?', [req.body, id], function() {
        res.json({text: 'People Update'})
    })
}

peopleControllers.getOne = (req, res) => {
    const { id } = req.params;
    pool.query('SELECT * FROM people WHERE id = ?', [id], function(err, data) {
        res.json(data)
    })
}

module.exports = peopleControllers;