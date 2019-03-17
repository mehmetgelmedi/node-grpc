const client = require('./client');
const payload = { id: '444', author: 'author 777' };
client.update(payload, (err, res) => {
    if (err) console.log(err);

    console.log(res)
})