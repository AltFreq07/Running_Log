
module.exports = function (req, res, next) {
    let body = '';

    req.on('data', (data) => {
        body += data;
    });

    req.on('end', () => {
        if (body.length > 0)
            req.body = JSON.parse(body.split('\n')[3]);
        next();
    });
};