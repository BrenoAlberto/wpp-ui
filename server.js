const express = require('express');
const db = require('./server/models/db');
const app = express();
const port = 3000;

require('./server/middleware/middleware')(app);

require('./server/api')(app);

db.sequelize.sync({
    force: true
}).then(() => {
    app.listen(port, () => {
        console.log('running server on port ' + port);
    })
});