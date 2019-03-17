const news = require('../news');

class Handlers {
    list(_, cb) {
        cb(null, news);
    }

    add(call, cb) {
        try {
            const req = call.request;
            news.push(req)
            cb(null, "success");
        } catch (err) {
            cb(err, null);
        }
    }

    remove(call, cb) {
        try {
            const req = call.request;
            const r = news.map(i => {
                return i.id;
            }).indexOf(req.id);
            if (r > -1) {
                news.splice(r, 1);
                cb(null, "success");
            } else {
                cb(new Error("id not found"), null);
            }
        } catch (err) {
            cb(err, null);
        }
    }

    update(call, cb) {
        try {
            const req = call.request;
            let isUpdate = false;
            news.map((v) => {
                if (v.id === req.id) {
                    if (typeof req.author !== undefined && req.author !== '')
                        v.author = req.author;
                    if (typeof req.title !== undefined && req.title !== '')
                        v.title = req.title;
                    if (typeof req.description !== undefined && req.description !== '')
                        v.description = req.description;
                    if (typeof req.content !== undefined && req.content !== '')
                        v.content = req.content;
                    if (typeof req.publishedAt !== undefined && req.publishedAt !== '')
                        v.publishedAt = req.publishedAt;
                    isUpdate = true;
                }
            });
            if (isUpdate)
                cb(null, "success");
            else
                cb(null, "nothing happened");
        } catch (err) {
            cb(err, null);
        }
    }

    selectById(call, cb) {
        try {
            const req = call.request;
            const sel = news.filter((v) => {
                return v.id === req.id;
            });
            cb(null, sel);
        } catch (err) {
            cb(err, null);
        }
    }
}

module.exports = new Handlers();