install:
	 npm ci

link:
	npm link

unlink:
	npm unlink -g

publish:
	sudo npm publish --dry-run

brain-games:
	node bin/brain-games.js

lint:
	npx eslint .