install:
	npm ci


brain:
	node bin/brain.js

hello:
	node bin/hello.js	

lint:
	npx eslint .

test:
	npm test

covertest:
	npx jest --coverage	

