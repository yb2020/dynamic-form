const port = process.env.SERVER_PORT // dev port

const api_host = process.env.API_SERVER_HOST
const api_port = process.env.API_SERVER_PORT

module.exports = {
  publicPath: "./",
  outputDir: "docs",
  productionSourceMap: false,
  
  chainWebpack: config => {
    config.plugins.delete('prefetch')
  },

	devServer: {
		port: port,
		proxy: {
			// change xxx-api/login => mock/login
			// detail: https://cli.vuejs.org/config/#devserver-proxy
			[process.env.VUE_APP_API_PATH]: {
				target: `http://${api_host}:${api_port}` ,
				changeOrigin: true,
				pathRewrite: {
				['^' + process.env.VUE_APP_API_PATH]: ''
				}
			}
		}
	},
	css: {
		loaderOptions: {
			stylus: {
				'resolve url': true,
				'import': [
					'./src/theme'
				]
			}
		}
	},
	pluginOptions: {
		'cube-ui': {
			postCompile: true,
			theme: true
		}
	}
}