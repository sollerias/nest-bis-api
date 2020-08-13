install:
	npm run install

prod:
	npm run start:prod

dev:
	rm -rf dist
	npm run start:dev

lint:
	npm run lint

test:
	npm run test