const client = require('./client');
const payload = { id: '444', author: 'author 444', title: 'title 444', description: 'description 444', content: 'content 444', publishedAt: '3/17/2019, 2:40:57 PM' };
client.add(payload, (err, res) => {
    if (err) console.log(err);

    console.log(res)
})