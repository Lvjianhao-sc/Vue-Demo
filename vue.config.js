// vue.config.js
const dev = require('./src/config/proxy/dev.env.js');
const prod = require('./src/config/proxy/dev.env.js');
module.exports = {
    lintOnSave: false,
	devServer: {
	    proxy: {
	          '/app': {
	            target: dev.API_ROOT,
	            ws: true,
	            changeOrigin: true
	          },
	          '/other': {
	            target: 'http://10.240.88.46:18323/crms'
	          }
	        }
	},
}