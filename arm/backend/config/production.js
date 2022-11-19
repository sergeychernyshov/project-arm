const path = require('path');
const fs = require('fs');

module.exports = (app, express) => {
    const build = path.join(__dirname, '..', '..', 'frontend', 'build');
    const buildIndex = path.join(__dirname, '..', '..', 'frontend' ,'build', 'index.html');

    if (!fs.existsSync(build)) {
        return;
    }

    app.use(express.static(build));

    app.get('/*', function(req, res) {
        res.sendFile(buildIndex);
    });
}