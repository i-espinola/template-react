module.exports = {
	apps: [
		{
			name: 'APP Todo-card',
			script: './server/index.js',

			// Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
			error_file: './server/logs/err.log',
			out_file: './server/logs/out.log',
			log_file: './server/logs/combined.log',
			time: true,
			args: 'one two',
			instances: 'max',
			// instances: 1,
			autorestart: true,
			watch: true,
			// max_memory_restart: '512M',
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
