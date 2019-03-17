const client = require('./client');
const payload = { id: '222' };
client.selectById(payload, (err, res) => {
    if (err) console.log(err);

    console.log(res)
})