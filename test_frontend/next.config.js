const withPlugins = require('next-compose-plugins')
const webpack = require('webpack')
const path = require("path")

// plugins you want to add go in the array
module.exports = withPlugins([], {
    webpack(config, options){
        //resolve the path
        config.resolve.modules.push(path.resolve('./'))
        return config
    }
})

