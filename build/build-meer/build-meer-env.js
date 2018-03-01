const pack = require('meer-pack')
module.exports = function whichEnv(env) {
    return pack({
        entry: './components/index.js',
        mode: env,
        outputConfig: {
            filename: 'meer.' + env + '.js',
            path: 'dist/packages',
            library: 'meer',
            libraryTarget: 'umd'
        }
    })
}