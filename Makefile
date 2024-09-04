deploy:
	git pull;
	yarn;
	yarn build;
	pm2 delete pm2.config.js;
	pm2 start pm2.config.js;
	pm2 logs;