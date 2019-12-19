const setup = {
	path: process.env.INIT_CWD || __dirname,
	file: 'index.html',
	public: 'build/',
	request: '/*',
	port: process.env.PORT || 3000,
	headers: {
		accept: 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET',
		'Access-Control-Allow-Headers':
			'Origin, X-Requested-With, Content-Type, Accept',
	},
	banner: '\nExpress server run in port',
	favicon: 'build/favicon.ico',
	status200: {
		code: 200,
		message: 'Ok',
	},
	status400: {
		code: 400,
		message: 'Bad Request',
	},
	status404: {
		code: 404,
		message: 'Not Found',
	},
	status500: {
		code: 500,
		message: 'Internal Server Error',
	},
}

module.exports = setup
