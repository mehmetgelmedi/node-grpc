const client = require('./client');
const payload = { id: '111' };
client.remove(payload, (err, res) => {
    if (err) console.log(err);

    console.log(res)
})