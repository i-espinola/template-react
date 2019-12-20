module.exports = {
	apps: [
		{
			name: 'APP Todo-card',
			script: './server/index.js',

			// Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
			// out_file: './server/logs/out.log',
			// error_file: './server/logs/err.log',
			log_file: './server/logs/combined.log',
			// time: true,
			// watch: true,
			// instances: 1,
			// args: 'one two',
			// autorestart: true,
			instances: 'max',  // Is for Heroku
			// max_memory_restart: '512M', // REMOVE FOR HEROKU
			env: {
				NODE_ENV: 'development',
			},
			env_production: {
				NODE_ENV: 'production',
			},
		},
	],

	deploy: {
		production: {
			user: 'node',
			host: '212.83.163.1',
			ref: 'origin/master',
			repo: 'git@github.com/i-espinola/test-todo-card.git',
			path: '/build',
			'post-deploy':
				'npm install && pm2 reload ecosystem.config.js --env production',
		},
	},
}
