const client = require('./client');
client.list({}, (err, news) => {
    if (err) console.log(err);

    console.log(news)
})