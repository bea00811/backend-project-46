install: 
	npm ci
lint:
	npx eslint .

test:
	npm test

gendiff:
	bin/gendiff.js -h

test-coverage:
	npm test -- --coverage --coverageProvider=v8